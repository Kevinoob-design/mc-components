variable "table_name" {
  description = "The name of the DynamoDB table"
  type        = string
}

variable "table_hash_key" {
  description = "The hash key of the DynamoDB table"
  type        = string
}

variable "table_read_capacity" {
  description = "The read capacity of the DynamoDB table"
  type        = number
  default     = 1
}

variable "table_write_capacity" {
  description = "The write capacity of the DynamoDB table"
  type        = number
  default     = 1
}

variable "attributes" {
  description = "A list of attributes for the DynamoDB table"
  type = list(object({
    name = string
    type = string
  }))
}

variable "tags" {
  description = "A map of tags to assign to the resources"
  type = object({
    managed_by = optional(string, "terraform")
    usage      = optional(string)
  })
}
