import { NestFactory } from '@nestjs/core';
import { BasicModule } from './basic/basic.module';

async function bootstrap() {
  const app = await NestFactory.create(BasicModule);
  await app.listen(3000);
}
bootstrap();
