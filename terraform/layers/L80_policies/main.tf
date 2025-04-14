provider "aws" {
  region = "us-east-1"
}

module "storybook_bucket_policy" {
  source    = "../../modules/s3/bucket_policy"
  bucket_id = data.aws_s3_bucket.s3_bucket.id
  policy    = data.aws_iam_policy_document.policy_document.json
}