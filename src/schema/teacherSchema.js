const Joi = require('joi');

const post = Joi.object({
    full_name: Joi.string().required(),
    address: Joi.string().required(),
    education: Joi.string().required(),
    age: Joi.number().required(),
    gender: Joi.string().required(),
    courses: Joi.string().required()
}).options({
    abortEarly: false
});

const put = Joi.object({
    id: Joi.number().required(),
    full_name: Joi.string(),
    address: Joi.string(),
    education: Joi.string(),
    age: Joi.number(),
    gender: Joi.string(),
    courses: Joi.string()
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