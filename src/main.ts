import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationInputPipe } from './user/pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationInputPipe());
  await app.listen(3000);
}
bootstrap();
