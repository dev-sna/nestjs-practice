import {
  Controller,
  Get,
  Post,
  Put,
  Req,
  Res,
  Delete,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { BasicService } from './basic.service';
import { Cat } from './basic.interfaces';
import { CatDto } from './dto/Cat.dto';

// * indicates wild card
@Controller('bas*ic')
export class BasicController {
  // provider injection
  constructor(private readonly basicService: BasicService) {}

  @Get()
  getHello(): string {
    return;
  }

  @Get('cats')
  getCats(): Cat[] {
    return this.basicService.get();
  }

  @Get('cats/promise')
  getCatsPromise(): Promise<{}> {
    return this.basicService.getCatsPromise();
  }

  @Post('cats/create')
  createCat(@Body() createCat: CatDto): string {
    this.basicService.create(createCat);
    return 'Cat created successfully';
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
