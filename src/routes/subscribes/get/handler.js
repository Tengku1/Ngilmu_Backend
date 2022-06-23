const { subscribes } = require('../../../models');

module.exports = async (req, res) => {
    const data = await subscribes.findAll();
    res.send(data);
}