module.exports = (sequelize, DataTypes) => {

    const Comments = sequelize.define("Comments", {
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            notEmpty: true,
            validate: {notEmpty:{msg: 'Comment is required'}}

        }
    })

    return Comments
}