const Joi = require('joi');

const register = Joi.object({
    email: Joi.string().email().required(),
    full_name: Joi.string().required(),
    password: Joi.string().required().min(8),
    phone: Joi.string().required(),
    roles: Joi.string().required(),
}).options({
    abortEarly: false
});
const login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
}).options({
    abortEarly: false
});

module.exports = {
    register,
    login
}