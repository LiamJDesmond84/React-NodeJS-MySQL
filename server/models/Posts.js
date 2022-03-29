module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            // required: [true, "Title is required"],
            allowNull: false,
            required: true,
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

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade", 
        })
    }

    // Posts.associate = (models) => {
    //     Posts.hasMany(models.Likes, {
    //         onDelete: "cascade", 
    //     })
    // }


    return Posts
}