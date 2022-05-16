# nestjs-blog-api-example

![NestJS Logo](./.github/images/nestjs-logo.svg)

Blog API example using NestJS framework.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Configure Environment File](#configure-environment-file)
- [Commands](#commands)

## Prerequisites

- [Node.js](https://nodejs.org) (>= 16 required)
- npm package manager (>= 8 required)
- [yarn](https://yarnpkg.com)
- [Docker](https://www.docker.com)

## Configure Environment File

Before developing or running any commands you should configure environment file to make everything work as expected.

1. Copy `.env.example` content and create new file `.env` and paste the content there.
2. Update the values after `=` for your right needs

## Commands

Run the database with docker.

```shell
yarn db:up
```

Stop and remove the database with docker.

```shell
yarn db:rm
```

Restart the database with docker.

```shell
yarn db:restart
```

Run the server locally.

```shell
yarn start
```

# License

[MIT](LICENSE)
