provider "aws" {
  region = "us-east-1"
}
resource "aws_kms_key" "kms-mc-components-codeartifact" {
  description = "registry domain key"
}

resource "aws_codeartifact_domain" "codeartifact-mc-components-domain" {
  domain         = "mc-components"
  encryption_key = aws_kms_key.kms-mc-components-codeartifact.arn
}

resource "aws_codeartifact_repository" "codeartifact-mc-components-main-repository" {
  repository = "main"
  domain     = aws_codeartifact_domain.codeartifact-mc-components-domain.domain
}
