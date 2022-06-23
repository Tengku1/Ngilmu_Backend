const { courses } = require('../../../models');

module.exports = async (req, res) => {
    const data = await courses.findAll();
    res.send(data);
}