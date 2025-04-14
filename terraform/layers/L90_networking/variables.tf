variable "region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "route53_zone_name" {
  description = "The name of the Route 53 zone"
  type        = string
}

# variable "root_domain" {
#   description = "The root domain"
#   type        = string
# }

# variable "namecheap_username" {
#   description = "The namecheap username"
#   type        = string
# }

# variable "namecheap_api_user" {
#   description = "The namecheap API user"
#   type        = string
# }

# variable "namecheap_api_key" {
#   description = "The namecheap API key"
#   type        = string
# }

# variable "namecheap_client_ip" {
#   description = "The namecheap client IP"
#   type        = string
# }

# variable "namecheap_subdomain_prefix" {
#   description = "The namecheap subdomain prefix"
#   type        = string
# }

variable "tags" {
  description = "A map of tags to assign to the resources"
  type = object({
    managed_by = optional(string, "terraform")
    usage      = optional(string)
  })
}