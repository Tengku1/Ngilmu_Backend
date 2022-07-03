const Joi = require('joi');

const post = Joi.object({
    teacherId: Joi.number().required(),
    name: Joi.string().required(),
    type: Joi.string().required().valid('akademik', 'non-akademik'),
    img: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required()
}).options({
    abortEarly: false
});

const put = Joi.object({
    id: Joi.number().required(),
    teacherId: Joi.number().required(),
    name: Joi.string(),
    type: Joi.string().valid('akademik', 'non-akademik'),
    img: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number()
}).options({
    abortEarly: false
});

const destroy = Joi.object({
    id: Joi.number().required()
}).options({
    abortEarly: false
});

module.exports = {
    post,
    put,
    destroy
}