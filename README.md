# nestjs-blog-api-example

Blog API example using NestJS framework.

## Table of Contents

1. [Prerequisites](#prerequisites)
1. [Configure Environment File](#configure-environment-file)
1. [Commands](#commands)

## Prerequisites

- [Node.js](https://nodejs.org) (>= 16 required)
- npm package manager (>= 8 required)
- [yarn](https://yarnpkg.com)
- [ffmpeg](https://ffmpeg.org)
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
