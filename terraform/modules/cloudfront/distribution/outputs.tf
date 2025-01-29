output "cloudfront_distribution" {
  description = "domain name of the cloudfront distribution"
  value       = aws_cloudfront_distribution.cloudfront_distribution.domain_name
}

output "cloudfront_distribution_arn" {
  description = "ARN of the cloudfront distribution"
  value       = aws_cloudfront_distribution.cloudfront_distribution.arn
}

output "cloudfront_distribution_id" {
  description = "ID of the cloudfront distribution"
  value       = aws_cloudfront_distribution.cloudfront_distribution.id
}