variable "region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-west-2"
}

variable "domain_name" {
  description = "The name of the CodeArtifact domain"
  type        = string
  default     = "prod-domain"
}

variable "encryption_key" {
  description = "The ARN of the KMS key for encryption"
  type        = string
  default     = "arn:aws:kms:us-west-2:123456789012:key/def456"
}

variable "repository_name" {
  description = "The name of the CodeArtifact repository"
  type        = string
  default     = "prod-repository"
}

variable "description" {
  description = "The description of the repository"
  type        = string
  default     = "Production repository"
}

variable "codeartifact_read_key" {
  description = "The static key for read operations"
  type        = string
  default     = "dev-read-key"
}

variable "codeartifact_write_key" {
  description = "The static key for write operations"
  type        = string
  default     = "dev-write-key"
}