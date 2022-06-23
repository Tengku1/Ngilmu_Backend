const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class subscribes extends Model {
        static associate(models) { }
    }

    subscribes.init({
        courses_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        teacher_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        from_subscribes: {
            type: DataTypes.DATE,
            allowNull: false
        },
        to_subscribes: {
            type: DataTypes.DATE,
            allowNull: false
        },
        total_price: {
            type: DataTypes.INTEGER,
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
        modelName: 'subscribes',
        underscored: true
    });

    return subscribes;
};