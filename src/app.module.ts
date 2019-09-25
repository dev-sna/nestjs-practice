import { Module } from '@nestjs/common';
import { AdvancedController } from './advanced/advanced.controller';
import { BasicModule } from './basic/basic.module';

@Module({
  imports: [BasicModule],
  controllers: [AdvancedController],
  providers: [],
})
export class AppModule {}
