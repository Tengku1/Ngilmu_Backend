const { courses } = require('../../../models');
const ErrorHandler = require('../../../utils/error_handler');

module.exports = async (req, res) => {
    const {
        params: {
            id
        }
    } = req;
    const data = await courses.findOne({
        where: {
            id
        }
    });

    if (!data) {
        throw new ErrorHandler(400, "Data Not Found");
    }

    res.send(data);
}