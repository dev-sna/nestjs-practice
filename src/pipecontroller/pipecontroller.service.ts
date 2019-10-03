import { Injectable } from '@nestjs/common';
import { Car, Part } from './pipecontroller.interfaces';

@Injectable()
export class PipeControllerService {
  private cars: Array<Car> = [];
  private parts: Array<Part> = [];

  createCar(item: Car) {
    this.cars.push(item);
  }

  getCars() {
    return this.cars;
  }

  createPart(part: Part) {
    this.parts.push(part);
  }
}
