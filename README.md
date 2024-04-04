# README #

Steps for setting up and running Mc-Components

## What is this repository for? ##

* This repo is a ui component library for `angularjs`

### How do I get set up? ###

* You must have `CODEARTIFACT_AUTH_TOKEN` to run yarn commands, otherwise the token parsing will fail and yarn will complain.

* To setup the token you can just run

```sh
    export CODEARTIFACT_AUTH_TOKEN='my_dumb_token'
```

for installing deps and running the project a dummy token will do, but if you will be publishing a new version you must have access to aws account and generate a real token like:

```sh
    export CODEARTIFACT_AUTH_TOKEN=`aws codeartifact get-authorization-token --domain mc-components --domain-owner {replace-with-owner} --region {replace-with-region} --query authorizationToken --output text`
```

* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
