terraform {
  backend "s3" {
    bucket         = "prod-mc-tf-backend-state"
    key            = "L30_storage-s3_storybook"
    region         = "us-east-1"
    dynamodb_table = "prod-mc-tf-state-lock"
    encrypt        = true
  }
}
