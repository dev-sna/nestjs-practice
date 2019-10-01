import { Injectable } from '@nestjs/common';
import { Car } from './pipecontroller.interfaces';

@Injectable()
export class PipeControllerService {
  private cars: Array<Car> = [];

  createCar(item: Car) {
    this.cars.push(item);
  }

  getCars() {
    return this.cars;
  }
}
