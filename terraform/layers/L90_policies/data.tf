data "aws_s3_bucket" "s3_bucket" {
  bucket = "mc-storybook-bucket"
}

data "aws_cloudfront_distribution" "cloudfront_distribution" {
  id = "E3PCHVTRL8JG27" // TODO: figure out how to remove this hardcode id
}

data "aws_iam_policy_document" "policy_document" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${data.aws_s3_bucket.s3_bucket.arn}/*"]
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "aws:SourceArn"
      values   = [data.aws_cloudfront_distribution.cloudfront_distribution.arn]
    }
  }
}