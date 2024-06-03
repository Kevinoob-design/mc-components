provider "aws" {
  region = var.region
}

module "s3_backend_prod" {
  source      = "../modules/s3_backend"
  bucket_name = "prod-${var.bucket_name}"
  table_name  = "prod-${var.table_name}"
  tags = {
    Environment = "prod"
  }
}

module "s3_backend_dev" {
  source      = "../modules/s3_backend"
  bucket_name = "dev-${var.bucket_name}"
  table_name  = "dev-${var.table_name}"
  tags = {
    Environment = "dev"
  }
}
