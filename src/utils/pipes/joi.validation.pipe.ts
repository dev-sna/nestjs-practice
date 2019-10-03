import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import {
  ExceptionFilter,
  Status,
} from '../exception-helpers/exceptionFilter.helper';

export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: any) {}

  transform(value: string, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);

    if (error) {
      throw new ExceptionFilter('Bad request', Status.FORBIDDEN);
    }

    return value;
  }
}
