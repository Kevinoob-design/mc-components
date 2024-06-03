terraform {
  backend "s3" {
    bucket         = "dev-mc-alyx-terraform-state-bucket"
    key            = "terraform/state"
    region         = "us-east-1"
    dynamodb_table = "dev-terraform-locks"
    encrypt        = true
  }
}
