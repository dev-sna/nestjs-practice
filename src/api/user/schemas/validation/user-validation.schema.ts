import * as Joi from '@hapi/joi';

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.number().required(),
  email: Joi.string().required(),
});
