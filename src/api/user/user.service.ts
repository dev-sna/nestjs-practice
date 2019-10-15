import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserType } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('UserSchema') private userSchema: Model<UserType>) {}
}
