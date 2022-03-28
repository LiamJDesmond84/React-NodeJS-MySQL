const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

//# Get All
router.get("/", (req, response) => {

    Users.findAll()
    .then(Users => response.json(Users))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
});

//# Get One
router.get("/byId/:id", (req, response) => {

    Users.findByPk(req.params.id)
    .then(user => response.json(user))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
    
})
//# REGISTER
router.post("/register", (req, response) => {
    const { username, password } = req.body;

    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash
        })
        .then(user => response.json(user))
        .catch((err)=>{console.log(err);response.status(400).json(err)})
    })

})

//# LOGIN
router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username }});

    if (!user) {
        res.json({ error: "User doesn't exist" })}

    bcrypt.compare(password, user.password).then((matches) => {
        if (!matches) res.json({ error: "Invalid User name or Passord"})
        res.json("Successfully logged in");
    })
    
})

//# Update One
router.put("/:id", (req, response) => {

    Users.update(req.body, { where :{id: req.params.id}}, { multi: true })
    .then(updatedUser => response.json(updatedUser))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
    
})

//# Delete One
router.delete("/:id", (req, response) => {

    Users.destroy({ where :{id: req.params.id}}, {truncate: true})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
    
})


module.exports = router;