import { HttpException, HttpStatus } from '@nestjs/common';

export enum Status {
  FORBIDDEN = 'FORBIDDEN',
  BAD_REQUEST = 'BAD_REQUEST',
}

export class ExceptionFilter extends HttpException {
  constructor(message: string, status: Status) {
    super(message, HttpStatus[status]);
  }
}
