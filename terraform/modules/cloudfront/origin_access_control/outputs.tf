output "cloudfront_origin_access_control_id" {
  description = "value of the origin access control id"
  value       = aws_cloudfront_origin_access_control.origin_access_control.id
}