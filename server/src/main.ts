import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('To-Do List')
    .setDescription('Study project')
    .build()
  
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document);

  const cors = require('cors');

  app.use(cors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true
  }))

  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
}
bootstrap();
