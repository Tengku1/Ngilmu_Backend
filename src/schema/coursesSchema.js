const Joi = require('joi');

const post = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required().valid('akademik', 'non-akademik'),
    status: Joi.string().required().valid('active', 'deactivate'),
    price: Joi.number().required()
}).options({
    abortEarly: false
});

const put = Joi.object({
    id: Joi.number().required(),
    name: Joi.string(),
    type: Joi.string().valid('akademik', 'non-akademik'),
    status: Joi.string().valid('active', 'deactivate'),
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