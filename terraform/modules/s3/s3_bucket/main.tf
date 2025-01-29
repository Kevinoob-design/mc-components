resource "aws_s3_bucket" "s3_bucket" {
  bucket = var.bucket_name

  lifecycle {
    prevent_destroy = false // var.lifecycle_prevent_destroy
  }

  tags = var.tags
}