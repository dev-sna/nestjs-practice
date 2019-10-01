import { Controller, Post, Body, Get, UsePipes } from '@nestjs/common';
import { CreateCarDTO } from './dto/createItem.dto';
import { PipeControllerService } from './pipecontroller.service';
import { Car } from './pipecontroller.interfaces';
import { JoiValidationPipe } from '../utils/pipes/joi.validation.pipe';
import { createCarSchema } from './validation-schema/validation.schema';

@Controller('pipe')
export class PipeControllerController {
  constructor(private readonly pipeService: PipeControllerService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createCarSchema))
  addCar(@Body() createCarDto: CreateCarDTO) {
    this.pipeService.createCar(createCarDto);
    return 'Car created successfully';
  }

  @Get()
  getAllItems(): Array<Car> {
    return this.pipeService.getCars();
  }
}
