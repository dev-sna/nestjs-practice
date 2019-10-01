import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateItemDTO } from 'src/advanced/dto/create-item.dto';
import { PipeControllerService } from './pipecontroller.service';
import { Item } from './pipecontroller.interfaces';

@Controller('pipecontroller')
export class PipecontrollerController {
  constructor(private readonly pipeService: PipeControllerService) {}

  @Post()
  addItem(@Body() createItemDto: CreateItemDTO) {
    this.pipeService.createItem(createItemDto);
    return 'Item created successfully';
  }

  @Get()
  getAllItems(): Array<Item> {
    return this.pipeService.getItems();
  }
}
