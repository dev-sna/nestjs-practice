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
} from '@nestjs/common';
import { CreateItemDTO } from './dto/create-item.dto';

@Controller('advanced')
export class AdvancedController {
  //   define subroute
  @Get('not found')
  @HttpCode(404)
  getData(): string {
    return 'Not found';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return id;
  }

  @Post('create')
  createItem(@Body() createItem: CreateItemDTO) {
    return `Item name: ${createItem.name}, description: ${
      createItem.description
    }`;
  }
}
