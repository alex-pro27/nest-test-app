import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser'
import { SERVER_PORT } from './environments';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.enableShutdownHooks();

  const options = new DocumentBuilder()
    .setTitle('Test App Nestjs')
    .setVersion('0.0.1')
    .setBasePath('/v1')
    .setExternalDoc('For more information', 'http://swagger.io')
    .addBearerAuth({type: 'apiKey'}, 'header')
    .build()

  app.setGlobalPrefix('/v1')
  app.useGlobalPipes(new ValidationPipe())

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(SERVER_PORT!);
}
bootstrap();
