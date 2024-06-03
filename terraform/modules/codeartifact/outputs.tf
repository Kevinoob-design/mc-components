output "domain_name" {
  description = "The name of the CodeArtifact domain"
  value       = aws_codeartifact_domain.domain.domain
}

output "repository_name" {
  description = "The name of the CodeArtifact repository"
  value       = aws_codeartifact_repository.repository.repository
}
