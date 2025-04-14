variable "name" {
  description = "The name of the subdomain"
  type        = string
}

variable "zone_id" {
  description = "The ID of the Route 53 zone"
  type        = string
}

variable "hosted_zone_id" {
  description = "The ID of the hosted zone"
  type        = string
}

variable "domain_name" {
  description = "The name of the domain"
  type        = string
}
