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
  default     = null
}

variable "read_key" {
  description = "The read secret for the repository"
  type        = string
}

variable "write_key" {
  description = "The write secret for the repository"
  type        = string
}
