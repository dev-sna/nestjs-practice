import { Controller, Get } from '@nestjs/common';

@Controller('core')
export class CoreController {
  @Get()
  getDate() {
    return 'Core module';
  }
}
