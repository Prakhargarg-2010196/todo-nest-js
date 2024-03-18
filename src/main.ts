import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // this nest factory takes the main app module that binds all the important core modules 
  // and then binds it to server.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
