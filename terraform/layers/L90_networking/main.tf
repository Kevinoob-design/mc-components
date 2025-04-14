provider "aws" {
  region = var.region
}

// ---- Route 53 Zone

module "storybook_route53_zone" {
  source = "../../modules/route53/zone"
  name   = var.route53_zone_name
  tags   = var.tags
}

// --- SSL Certificate

module "storybook_ssl_certificate" {
  source      = "../../modules/ssl/acm"
  domain_name = var.route53_zone_name
  zone_id     = module.storybook_route53_zone.zone_id
  tags        = var.tags
}

// ---- Storybook Cloudfront distribution

module "storybook_origin_access_control" {
  source                            = "../../modules/cloudfront/origin_access_control"
  name                              = "Storybook Origin Access Control"
  origin_access_control_origin_type = "s3"
  signing_protocol                  = "sigv4"
  signing_behavior                  = "always"
  description                       = "Origin access control for ${data.aws_s3_bucket.s3_bucket.bucket}"
}

module "storybook_distribution" {
  source                      = "../../modules/cloudfront/distribution"
  bucket_regional_domain_name = data.aws_s3_bucket.s3_bucket.bucket_domain_name
  origin_id                   = data.aws_s3_bucket.s3_bucket.id
  origin_access_control_id    = module.storybook_origin_access_control.cloudfront_origin_access_control_id
  default_root_object         = "index.html"
  comment                     = "Cloudfront distribution for ${data.aws_s3_bucket.s3_bucket.bucket}"
  tags = {
    Name = "Cloudfront distribution for ${data.aws_s3_bucket.s3_bucket.bucket}"
  }
  default_cache_behavior = {
    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]
    forwarded_values = {
      cookies = {}
    }
  }
  geo_restriction     = {}
  acm_certificate_arn = module.storybook_ssl_certificate.acm_certificate_arn
  aliases             = [var.route53_zone_name]
}

// --- Route 53 Records

module "storybook_record" {
  source         = "../../modules/route53/record"
  name           = var.route53_zone_name
  zone_id        = module.storybook_route53_zone.zone_id
  hosted_zone_id = module.storybook_distribution.hosted_zone_id
  domain_name    = module.storybook_distribution.cloudfront_distribution
}