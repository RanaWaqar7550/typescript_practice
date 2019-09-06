import Joi from 'joi';

export default {
  registerFields: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .max(128)
        .required(),
      confirmPassword: Joi.string()
        .required()
        .min(6)
        .max(128)
        .required(),
      username: Joi.string().required(),
      first_name: Joi.string(),
      last_name: Joi.string()
    }
  }
}