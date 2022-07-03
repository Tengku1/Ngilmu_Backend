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
        },
        education: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.ENUM('Wanita', 'Pria'),
        },
        courses: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        sequelize,
        modelName: 'teachers',
        underscored: true
    });

    return teachers;
};