const ip = require('ip');

require('dotenv').config();

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    DIALECT: process.env.DIALECT,
    TIMEZONE: process.env.TIMEZONE,
    POOL: {
        MAX: 5,
        MIN: 0,
        ACQUIRE: 30000,
        IDLE: 10000
    },
    BASE_URL: ip.address(),
    PORT: 3306
};