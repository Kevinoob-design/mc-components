variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
}

variable "lifecycle_prevent_destroy" {
  description = "Should the bucket be protected from deletion?"
  type        = bool
  default     = false
}

variable "tags" {
  description = "A map of tags to assign to the resources"
  type = object({
    managed_by = optional(string, "terraform")
    usage      = optional(string)
  })
}
