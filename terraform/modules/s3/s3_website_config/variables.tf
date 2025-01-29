variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
}

variable "index_document_suffix" {
  description = "The name of the index document for the website"
  type        = string
}

variable "error_document_key" {
  description = "The key of the error document for the website"
  type        = string
}