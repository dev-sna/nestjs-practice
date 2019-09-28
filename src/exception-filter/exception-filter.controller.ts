import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import {
  ExceptionFilter,
  Status,
} from '../utils/exception-helpers/exceptionFilter.helper';

@Controller('exception-filter')
export class ExceptionFilterController {
  @Get('basic')
  basic() {
    throw new HttpException('Hala', HttpStatus.FORBIDDEN);
  }

  @Get('object')
  object() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Some random error',
      },
      403,
    );
  }

  @Get('custom')
  custom() {
    throw new ExceptionFilter('Bad request', Status.BAD_REQUEST);
  }
}
