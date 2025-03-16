provider "aws" {
  region = "us-east-1"
}

module "storybook_origin_access_control" {
  source                            = "../../../modules/cloudfront/origin_access_control"
  name                              = "Storybook Origin Access Control"
  origin_access_control_origin_type = "s3"
  signing_protocol                  = "sigv4"
  signing_behavior                  = "always"
  description                       = "Origin access control for ${data.aws_s3_bucket.s3_bucket.bucket}"
}

module "storybook_distribution" {
  source                      = "../../../modules/cloudfront/distribution"
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
  geo_restriction = {}
}