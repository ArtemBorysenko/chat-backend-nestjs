import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/passport/JWT-auth.guard';
import { AuthGuard } from './core/guards/global-auth.guard';

import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { from } from 'rxjs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new (AuthGuard('jwt')));

  const reflector = app.get( Reflector );
  app.useGlobalGuards( new AuthGuard( reflector ));

  await app.listen(3003);
}
bootstrap();

//=====================================

// import { NestFactory, NestFactoryStatic, AbstractHttpAdapter } from '@nestjs/core';
// import { HttpServer } from '@nestjs/common';
// import express = require('express');
// // import express from 'express';
// import { createServer } from 'http';
// import { NestExpressApplication } from '@nestjs/platform-express';
// import { AppModule } from './app.module';
// import { from } from 'rxjs';
//
// import { UsersModule } from './users/users.module';
// import { DialogsModule } from './dialogs/dialogs.module';
// import { MessagesModule } from './messages/messages.module';
// import { AuthModule } from './auth/auth.module';
//
// async function bootstrap() {
//   const server: express.Application = express();//express.Application
//   // const config = require('../../etc/config.js');
//
//   const app = await NestFactory.create(AppModule);
//   const httpAdapter: any = app.getHttpAdapter();
//
//
//   // const apiFactory = new NestFactoryStatic();
//   const api = await NestFactory.create(AuthModule, httpAdapter);
//   api.setGlobalPrefix("/api/v1");
//   await api.init();
//
//   // const adminFactory = new NestFactoryStatic();
//   const user = await NestFactory.create(UsersModule, httpAdapter);
//   user.setGlobalPrefix("/user");
//   await user.init();
//
//   createServer(server).listen(3003);
// }
//
// bootstrap();