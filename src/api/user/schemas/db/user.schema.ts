import * as mongoose from 'mongoose';
import { getHash } from '../../../../utils/helpers';

export const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre('save', function() {
  const password = getHash(this.password);
  this.password = password;
});
