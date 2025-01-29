variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
}

variable "block_public_acls" {
  description = "Should the bucket block public ACLs?"
  type        = bool
  default     = true
}

variable "block_public_policy" {
  description = "Should the bucket block public policies?"
  type        = bool
  default     = true
}

variable "ignore_public_acls" {
  description = "Should the bucket ignore public ACLs?"
  type        = bool
  default     = true
}

variable "restrict_public_buckets" {
  description = "Should the bucket restrict public buckets?"
  type        = bool
  default     = true
}