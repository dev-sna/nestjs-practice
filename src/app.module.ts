import { Module } from '@nestjs/common';
import { BasicController } from './basic/basic.controller';
import { AdvancedController } from './advanced/advanced.controller';

@Module({
  imports: [],
  controllers: [BasicController, AdvancedController],
})
export class AppModule {}
