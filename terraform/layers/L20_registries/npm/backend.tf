terraform {
  backend "s3" {
    bucket         = "prod-mc-tf-backend-state"
    key            = "L20-registries-npm"
    region         = "us-east-1"
    dynamodb_table = "prod-mc-tf-state-lock"
    encrypt        = true
  }
}
