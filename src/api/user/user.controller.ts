import { Controller, Post, UsePipes, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { JoiValidationPipe } from '../../utils/pipes/joi.validation.pipe';
import { createUserSchema } from './schemas/validation/user-validation.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @UsePipes(new JoiValidationPipe(createUserSchema))
  // for validation to work, we have use @Body decorator
  register(@Body() createUserDTO) {
    this.userService.createUser(createUserDTO);
  }
}
