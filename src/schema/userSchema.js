const Joi = require('joi');

const register = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required().min(8),
    address: Joi.string().required(),
    roles: Joi.string().required()
}).options({
    abortEarly: false
});
const login = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
}).options({
    abortEarly: false
});

module.exports = {
    register,
    login
}