import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Next,
  Session,
  HttpCode,
  Body,
  Param,
  Header,
  Redirect,
} from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';
import { NextFunction } from 'express';

@Controller('advanced')
export class AdvancedController {
  @Redirect('http://localhost/advanced/target', 302)
  @Get('direct')
  director(): any {
    return { url: 'http://localhost:3000/advanced/target' };
  }

  @Get('target')
  redirectTarget(): string {
    return 'Redirected here';
  }

  //   define subroute
  @Get('not-found')
  @HttpCode(404)
  getData(): string {
    return 'Not found';
  }

  // session
  @Get('session')
  session(@Session() session): string {
    console.log('session: ', session);
    return 'Session';
  }

  // next
  @Get('next')
  next(@Next() next: NextFunction): string {
    // It won't return anything and will call the api defined below
    next();
    return 'Data has been updated';
  }

  @Header('Cache-Control', 'none')
  @Get(':id')
  // findOne(@Param() params)
  // another way to do the same
  findOne(@Param('id') id) {
    return `ID: ${id}`;
  }

  @Post('create')
  createItem(@Body() createItem: CreateItemDTO) {
    return `Item name: ${createItem.name}, description: ${
      createItem.description
    }`;
  }
}
