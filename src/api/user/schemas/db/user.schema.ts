import * as mongoose from 'mongoose';

export const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
