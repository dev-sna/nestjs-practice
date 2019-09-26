import { Controller, Get } from '@nestjs/common';

@Controller('core')
export class CoreController {
  @Get()
  getData() {
    return 'Core module';
  }
}
