import { Module } from '@nestjs/common';
import { BasicController } from './basic.controller';
import { BasicService } from './basic.service';
import { CoreModule } from '../core/core.module';

// a module can be re-exported and can be injectable, global and dynamic

@Module({
  imports: [CoreModule],
  controllers: [BasicController],
  providers: [BasicService],
  exports: [CoreModule, BasicService],
})
export class BasicModule {}
