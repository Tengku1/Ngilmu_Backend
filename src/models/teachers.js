const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class teachers extends Model {
        static associate(models) { }
    }

    teachers.init({
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        education: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('Wanita', 'Pria'),
            allowNull: false
        },
        courses: {
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
        modelName: 'teachers',
        underscored: true
    });

    return teachers;
};