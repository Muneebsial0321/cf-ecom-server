import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    // forbidNonWhitelisted: true,

  }))


  // const ORIGINS: Array<string> = [process.env.FRONTEND_URL, process.env.FRONTEND_URL_PROD,process.env.ADMIN_URL]

  app.enableCors({
    origin: "*",
    // credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization,',
  });


  await app.listen(process.env.PORT);
  console.log("listening on port ", process.env.BACKEND_URL)
}
bootstrap();
