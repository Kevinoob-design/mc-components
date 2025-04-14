variable "region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "The name of the CodeArtifact domain"
  type        = string
}

variable "repository_name" {
  description = "The name of the CodeArtifact repository"
  type        = string
}

variable "description" {
  description = "The description of the repository"
  type        = string
}

variable "tags" {
  description = "A map of tags to assign to the resources"
  type = object({
    managed_by = optional(string, "terraform")
    usage      = optional(string)
  })
}