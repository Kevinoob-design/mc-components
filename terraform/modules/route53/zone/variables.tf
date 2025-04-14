variable "name" {
  description = "The name of the subdomain"
  type        = string
}
variable "tags" {
  description = "A map of tags to assign to the resources"
  type = object({
    managed_by = optional(string, "terraform")
    usage      = optional(string)
  })
}
