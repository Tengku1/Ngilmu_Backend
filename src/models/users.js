const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        static associate(models) { }
    }

    users.init({
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roles: {
            type: DataTypes.ENUM('Murid', 'Guru'),
            allowNull: false
        }
    }, {
        timestamps: false,
        sequelize,
        modelName: 'users',
        underscored: true
    });

    return users;
};