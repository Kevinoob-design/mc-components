provider "aws" {
  region = var.region
}

module "npm_registry" {
  source          = "../../../modules/codeartifact"
  domain_name     = var.domain_name
  repository_name = var.repository_name
  description     = var.description
  tags            = var.tags
}