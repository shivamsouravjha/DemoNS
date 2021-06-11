import Joi from '@hapi/joi';

export default { images: {
    create: Joi.object().keys({
      info: Joi.string(),
      type: Joi.string(),
      name: Joi.string(),
      createdBy: Joi.string(),
      accountID: Joi.number()
    }),
    get: Joi.object().keys({
      id: Joi.number()
    }),
    delete: Joi.object().keys({
      id: Joi.number()
    })
  }
}