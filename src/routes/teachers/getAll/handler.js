const { teachers } = require('../../../models');

module.exports = async (req, res) => {
    const data = await teachers.findAll();
    res.send(data);
}