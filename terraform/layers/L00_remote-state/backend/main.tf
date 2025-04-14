provider "aws" {
  region = var.region
}

module "tf_s3_backend" {
  source      = "../../../modules/s3/s3_bucket"
  bucket_name = "prod-${var.bucket_name}"
  tags = {
    usage = "remote state"
  }
}

module "tf_dynamodb_locks" {
  source         = "../../../modules/dynamo_db"
  table_name     = "prod-${var.table_name}"
  table_hash_key = "LockID"
  attributes = [
    {
      name = "LockID"
      type = "S"
    }
  ]
  tags = {
    usage = "remote state"
  }
}
