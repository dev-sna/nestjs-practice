import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserType } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userSchema: Model<UserType>,
  ) {}

  async createUser(user: UserType) {
    const newUser = new this.userSchema(user);
    const result = await newUser.save();
    console.log('result: ', result);
  }
}
