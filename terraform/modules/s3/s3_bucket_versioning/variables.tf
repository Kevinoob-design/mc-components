variable "bucket_id" {
  description = "The ID of the S3 bucket"
  type        = string
}

variable "versioning_configuration_status" {
  description = "Should the bucket have versioning enabled?"
  type        = string
  default     = "Enabled"
}
