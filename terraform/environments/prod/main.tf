provider "aws" {
  region = var.region
}
module "codeartifact" {
  source          = "../../modules/codeartifact"
  domain_name     = var.domain_name
  repository_name = var.repository_name
  description     = var.description
  read_key        = var.codeartifact_read_key
  write_key       = var.codeartifact_write_key
}
