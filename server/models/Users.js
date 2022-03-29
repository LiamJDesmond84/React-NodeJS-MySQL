module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            notEmpty: true,
            validate: {notEmpty:{msg: 'User Name is required'}}

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {notEmpty:{msg: 'Password is required'}}

        },
    })

    // Users.associate = (models) => {
    //     Users.hasMany(models.Posts, {
    //         onDelete: "cascade", 
    //     })
    // }


    return Users
}