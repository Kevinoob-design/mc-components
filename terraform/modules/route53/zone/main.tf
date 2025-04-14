resource "aws_route53_zone" "zone" {
  name = var.name
  tags = var.tags
}
