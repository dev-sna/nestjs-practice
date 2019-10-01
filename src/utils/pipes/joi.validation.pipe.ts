import { PipeTransform, ArgumentMetadata } from '@nestjs/common';

export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: Object) {}

  transform(value: string, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
  }
}
