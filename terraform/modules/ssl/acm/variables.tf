variable "domain_name" {
  description = "The domain name for the ACM certificate"
  type        = string
}
variable "zone_id" {
  description = "The zone ID for the Route 53 zone"
  type        = string
}

variable "tags" {
  description = "A map of tags to assign to the resources"
  type = object({
    managed_by = optional(string, "terraform")
    usage      = optional(string)
  })
}
