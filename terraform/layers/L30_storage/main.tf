provider "aws" {
  region = "us-east-1"
}

module "storybook_bucket" {
  source      = "../../modules/s3/s3_bucket"
  bucket_name = "mc-storybook-bucket"
  tags = {
    usage = "Storybook static files"
  }
}

module "storybook_public_access_block" {
  source      = "../../modules/s3/s3_public_access_block"
  bucket_name = module.storybook_bucket.aws_s3_bucket_name
}

module "storybook_website_config" {
  source = "../../modules/s3/s3_website_config"

  bucket_name           = module.storybook_bucket.aws_s3_bucket_name
  index_document_suffix = "index.html"
  error_document_key    = "index.html"
}