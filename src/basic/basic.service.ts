import { Injectable, Scope } from '@nestjs/common';
import { Cat } from './basic.interfaces';

// Injectable is used to define the scope of the provider
// not necessary
@Injectable({ scope: Scope.DEFAULT })
export class BasicService {
  private readonly cats: Cat[] = [];

  create(cat) {
    this.cats.push(cat);
  }

  get() {
    return this.cats;
  }

  getCatsPromise() {
    return new Promise(res => {
      res(this.cats);
    });
  }
}
