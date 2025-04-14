variable "region" {
  description = "The AWS region to deploy resources"
  type        = string
}

variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
}

variable "table_name" {
  description = "The name of the DynamoDB table"
  type        = string
}
