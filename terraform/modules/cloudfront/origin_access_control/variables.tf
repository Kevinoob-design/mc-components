variable "name" {
  description = "The name of the origin access control"
  type        = string
}

variable "description" {
  description = "The description of the origin access control"
  type        = string
}

variable "origin_access_control_origin_type" {
  description = "The origin access control origin type"
  type        = string
}

variable "signing_behavior" {
  description = "The signing behavior"
  type        = string
}

variable "signing_protocol" {
  description = "The signing protocol"
  type        = string
}