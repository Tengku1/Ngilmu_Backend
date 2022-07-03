const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class courses extends Model {
        static associate(models) { }
    }

    courses.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('akademik', 'non-akademik'),
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        sequelize,
        modelName: 'courses',
        underscored: true
    });

    return courses;
};