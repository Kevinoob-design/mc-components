terraform {
  backend "s3" {
    bucket         = "prod-mc-alyx-terraform-state-bucket"
    key            = "terraform/state"
    region         = "us-east-1"
    dynamodb_table = "prod-terraform-locks"
    encrypt        = true
  }
}
