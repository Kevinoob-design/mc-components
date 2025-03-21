variable "bucket_regional_domain_name" {
  description = "The regional domain name of the S3 bucket"
  type        = string
}

variable "origin_id" {
  description = "The ID of the origin"
  type        = string
}

variable "origin_access_control_id" {
  description = "The ID of the origin access control"
  type        = string
}

variable "default_root_object" {
  description = "The default root object"
  type        = string
}

variable "comment" {
  description = "The comment for the CloudFront distribution"
  type        = string
}

variable "default_cache_behavior" {
  description = ""
  type = object({
    min_ttl                = optional(number, 0)
    default_ttl            = optional(number, 0)
    max_ttl                = optional(number, 0)
    viewer_protocol_policy = optional(string, "redirect-to-https")
    allowed_methods        = list(string)
    cached_methods         = list(string)
    forwarded_values = optional(object({
      query_string = optional(bool, false)
      cookies = optional(object({
        forward = optional(string, "none")
      }))
    }))
  })
}

variable "geo_restriction" {
  description = "The locations for the geo restriction"
  type = object({
    locations        = optional(list(string), [])
    restriction_type = optional(string, "none")
  })
}

variable "viewer_certificate_cloudfront_default_certificate" {
  description = "The CloudFront default certificate for the viewer certificate"
  type        = bool
  default     = true
}

variable "tags" {
  description = "A map of tags to assign to the resources"
  type = object({
    managed_by = optional(string, "terraform")
    usage      = optional(string)
  })
}