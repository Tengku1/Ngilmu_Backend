const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        static associate(models) { }
    }

    users.init({
        username: {
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
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        modified_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
    }, {
        timestamps: false,
        sequelize,
        modelName: 'users',
        underscored: true
    });

    return users;
};