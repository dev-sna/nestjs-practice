import { IsString, IsInt } from 'class-validator';

export class CreatePartDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly price: number;

  @IsString()
  readonly description: string;
}
