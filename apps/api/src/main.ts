import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

(async () => {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(new ValidationPipe());

  const host = process.env.SERVER_HOST || 'localhost';
  const port = process.env.SERVER_PORT || 3333;

  await app.listen(port, host);

  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`
  );
})();
