resource "aws_dynamodb_table" "dynamodb_table" {
  name           = var.table_name
  read_capacity  = var.table_read_capacity
  write_capacity = var.table_write_capacity
  hash_key       = var.table_hash_key

  dynamic "attribute" {
    for_each = var.attributes
    content {
      name = attribute.value.name
      type = attribute.value.type
    }
  }

  tags = var.tags
}
