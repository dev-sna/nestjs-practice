import { Controller, Get, Post, Put, Req, Res, Delete } from '@nestjs/common';
import { Request, Response } from 'express';

// * indicates wild card
@Controller('ca*ts')
export class BasicController {
  @Get()
  getHello(): string {
    return 'Hello world';
  }

  @Post()
  setData(@Req() req: Request): string {
    return 'Data saved';
  }

  @Put()
  updateData(@Res() res: Response): string {
    return 'Data has been updated';
  }

  @Delete()
  deleteData(): string {
    return 'Data has been deleted';
  }
}
