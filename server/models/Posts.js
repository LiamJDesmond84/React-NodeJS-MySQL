module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            required: [true, "Title is required"],
            notEmpty: true,
            validate: {notEmpty:{msg: 'Title is required'}}

        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {notEmpty:{msg: 'Description is required'}}

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {notEmpty:{msg: 'Username is required'}}

        },
    })

    return Posts
}