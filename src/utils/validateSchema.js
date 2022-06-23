const ErrorHandler = require('./error_handler');

const validateSchema = (payload, schema) => {
    const result = schema.validate(payload);

    if (result.error) {
        throw new ErrorHandler("400", result.error.message);
    }
};

module.exports = schema => (req, res, next) => {
    const {
        headers: headersSchema,
        query: querySchema,
        params: paramsSchema,
        body: bodySchema
    } = schema;
    const {
        headers, query, params, body
    } = req;
    let error;

    try {
        if (headersSchema) {
            validateSchema(headers, headersSchema)
        }

        if (querySchema) {
            validateSchema(query, querySchema)
        }

        if (paramsSchema) {
            validateSchema(params, paramsSchema)
        }

        if (bodySchema) {
            validateSchema(body, bodySchema)
        }
    } catch (err) {
        const { statusCode, message } = err;
        res.status(statusCode).json({
            status: "error",
            statusCode,
            message
        });

        error = err;
    }

    return next(error);
};