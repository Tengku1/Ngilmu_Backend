module.exports = (handler) => async (req, res, next) => {
    let error;

    try {
        await handler(req, res);
    } catch (err) {
        console.log(err.message);
        const { statusCode, message } = err;
        if (!statusCode) {
            res.status(500).json({
                status: "error",
                statusCode: 500,
                message: "Internal Server Error"
            });
        }
        res.status(statusCode).json({
            status: "error",
            statusCode,
            message
        });

        error = err;
    }

    return next(error);
};
