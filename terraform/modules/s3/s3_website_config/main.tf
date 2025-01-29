resource "aws_s3_bucket_website_configuration" "website_configuration" {
  bucket = var.bucket_name
  index_document {
    suffix = var.index_document_suffix
  }
  error_document {
    key = var.error_document_key
  }
}