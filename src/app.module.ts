import { Module } from '@nestjs/common';
import { BasicController } from './basic/basic.controller';
import { AdvancedController } from './advanced/advanced.controller';
import { BasicService } from './basic/basic.service';

@Module({
  imports: [],
  controllers: [BasicController, AdvancedController],
  providers: [BasicService],
})
export class AppModule {}
