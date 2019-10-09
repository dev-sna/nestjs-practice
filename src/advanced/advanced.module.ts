import { Module } from '@nestjs/common';
import { AdvancedController } from './advanced.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../utils/guards/basic-roles.guard';

@Module({
  imports: [],
  controllers: [AdvancedController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AdvancedModule {}
