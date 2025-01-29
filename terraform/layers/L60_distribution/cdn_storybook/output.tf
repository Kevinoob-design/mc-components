output "storybook_origin_access_control_id" {
    description = "value of the origin access control id"
    value = module.storybook_distribution.cloudfront_distribution_id
}