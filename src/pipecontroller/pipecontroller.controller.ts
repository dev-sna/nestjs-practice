import { Controller, Post, Body, Get, UsePipes } from '@nestjs/common';
import { CreateCarDTO } from './dto/createCar.dto';
import { PipeControllerService } from './pipecontroller.service';
import { Car } from './pipecontroller.interfaces';
import { JoiValidationPipe } from '../utils/pipes/joi.validation.pipe';
import { ClassValidatorPipe } from '../utils/pipes/class-validator.pipe';
import { createCarSchema } from './validation-schema/validation.schema';
import { CreatePartDto } from './dto/createPart.dto';

@Controller('pipe')
export class PipeControllerController {
  constructor(private readonly pipeService: PipeControllerService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createCarSchema))
  addCar(@Body() createCarDto: CreateCarDTO) {
    this.pipeService.createCar(createCarDto);
    return 'Car created successfully';
  }

  @Post('/part')
  @UsePipes(new ClassValidatorPipe())
  addPart(@Body() createPartDto: CreatePartDto) {
    this.pipeService.createPart(createPartDto);
    return 'Part added successfully';
  }

  @Get()
  getAllItems(): Array<Car> {
    return this.pipeService.getCars();
  }
}
