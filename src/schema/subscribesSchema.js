const Joi = require('joi');

const post = Joi.object({
    courses_id: Joi.number().required(),
    teacher_id: Joi.number().required(),
    user_id: Joi.number().required(),
    desc: Joi.string().required(),
    from_subscribes: Joi.string().required(),
    to_subscribes: Joi.string().required(),
    total_price: Joi.number().required(),
}).options({
    abortEarly: false
});

const put = Joi.object({
    id: Joi.number().required(),
    courses_id: Joi.number().required(),
    teacher_id: Joi.number().required(),
    user_id: Joi.number().required(),
    desc: Joi.string(),
    from_subscribes: Joi.string(),
    to_subscribes: Joi.string(),
    total_price: Joi.number(),
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