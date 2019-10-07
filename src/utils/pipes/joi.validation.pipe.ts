import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import {
  ExceptionFilter,
  Status,
} from '../exception-helpers/exceptionFilter.helper';

export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: any) {}

  transform(value: string, metadata: ArgumentMetadata) {
    // here metadata is an object with prop "metatype" which is a function
    // that's CreateCarDTO
    const { error } = this.schema.validate(value);

    if (error) {
      throw new ExceptionFilter('Bad request', Status.FORBIDDEN);
    }

    return value;
  }
}
