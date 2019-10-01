import { Injectable } from '@nestjs/common';
import { Item } from './pipecontroller.interfaces';

@Injectable()
export class PipeControllerService {
  private items: Array<Item>;

  createItem(item: Item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
