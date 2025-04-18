resource "aws_codeartifact_domain" "domain" {
  domain = var.domain_name
  tags   = var.tags
}

resource "aws_codeartifact_repository" "repository" {
  repository  = var.repository_name
  domain      = aws_codeartifact_domain.domain.domain
  description = var.description
  tags        = var.tags
}