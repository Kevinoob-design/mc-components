resource "aws_s3_bucket_versioning" "s3_bucket" {
  bucket = var.bucket_id

  versioning_configuration {
    status = var.versioning_configuration_status
  }
}