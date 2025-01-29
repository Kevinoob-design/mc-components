resource "aws_cloudfront_distribution" "cloudfront_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = var.default_root_object
  comment             = var.comment
  tags                = var.tags

  origin {
    domain_name              = var.bucket_regional_domain_name
    origin_id                = var.origin_id
    origin_access_control_id = var.origin_access_control_id
  }

  default_cache_behavior {
    min_ttl                = var.default_cache_behavior.min_ttl
    default_ttl            = var.default_cache_behavior.default_ttl
    max_ttl                = var.default_cache_behavior.max_ttl
    viewer_protocol_policy = var.default_cache_behavior.viewer_protocol_policy

    allowed_methods  = var.default_cache_behavior.allowed_methods
    cached_methods   = var.default_cache_behavior.cached_methods
    target_origin_id = var.origin_id

    forwarded_values {
      query_string = var.default_cache_behavior.forwarded_values.query_string
      cookies {
        forward = var.default_cache_behavior.forwarded_values.cookies.forward
      }
    }
  }

  restrictions {
    geo_restriction {
      locations        = var.geo_restriction.locations
      restriction_type = var.geo_restriction.restriction_type
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = var.viewer_certificate_cloudfront_default_certificate
  }
}