import * as Joi from '@hapi/joi';

export const createCarSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
});
