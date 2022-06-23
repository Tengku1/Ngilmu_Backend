const Sequelize = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
    timezone: config.TIMEZONE,
    operatorsAliases: 0,
    retry: {
        match: [
            /ETIMEDOUT/,
            /EHOSTUNREACH/,
            /ECONNRESET/,
            /ECONNREFUSED/,
            /ETIMEDOUT/,
            /ESOCKETTIMEDOUT/,
            /EHOSTUNREACH/,
            /EPIPE/,
            /EAI_AGAIN/,
            /SequelizeConnectionError/,
            /SequelizeConnectionRefusedError/,
            /SequelizeHostNotFoundError/,
            /SequelizeHostNotReachableError/,
            /SequelizeInvalidConnectionError/,
            /SequelizeConnectionTimedOutError/
        ],
        max: 100
    },
    pool: {
        max: config.POOL.MAX,
        min: config.POOL.MIN,
        acquire: config.POOL.ACQUIRE,
        idle: config.POOL.IDLE
    }
});


// Import Models
const users = require('./users')(sequelize, Sequelize);
const teachers = require('./teachers')(sequelize, Sequelize);
const courses = require('./courses')(sequelize, Sequelize);
const subscribe = require('./subscribes')(sequelize, Sequelize);

// Relationship hasOne
users.hasOne(subscribe, { foreignKey: 'user_id' });
teachers.hasOne(subscribe, { foreignKey: 'guru_id' });
courses.hasOne(subscribe, { foreignKey: 'courses_id' });

// Relationship belongsTo
subscribe.belongsTo(users, { foreignKey: 'user_id' });
subscribe.belongsTo(teachers, { foreignKey: 'guru_id' });
subscribe.belongsTo(courses, { foreignKey: 'courses_id' });


// Export Models
module.exports = {
    sequelize,
    Sequelize,
    users,
    teachers,
    courses
};