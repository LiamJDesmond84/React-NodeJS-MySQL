const express = require("express");
const router = express.Router();
const { Users } = require("../models");

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
//# Create One
router.post("/", (req, response) => {
    const { username, password } = req.body;

    Users.create(req.body)
    .then(user => response.json(user))
    .catch((err)=>{console.log(err);response.status(400).json(err)})

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