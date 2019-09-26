import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('exception-filter')
export class ExceptionFilterController {
  @Get('basic')
  basic() {
    throw new HttpException('Hala', HttpStatus.FORBIDDEN);
  }
}
