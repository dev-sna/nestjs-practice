import { Module } from '@nestjs/common';
import { AdvancedController } from './advanced.controller';

@Module({
  imports: [],
  controllers: [AdvancedController],
})
export class AdvancedModule {}
