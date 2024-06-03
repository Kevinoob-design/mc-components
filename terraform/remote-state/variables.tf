variable "region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
  default     = "mc-alyx-terraform-state-bucket"
}

variable "table_name" {
  description = "The name of the DynamoDB table"
  type        = string
  default     = "terraform-locks"
}
