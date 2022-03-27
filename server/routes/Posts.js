const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

//# Get All
router.get("/", (req, response) => {

    Posts.findAll()
    .then(posts => response.json(posts))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
});

//# Get One
router.get("/byId/:id", (req, response) => {

    Posts.findByPk(req.params.id)
    .then(post => response.json(post))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
    
})
//# Create One
router.post("/", (req, response) => {
    let responseData = {
        success: false,

        errors: {}
    };

    Posts.create(req.body)
    .then(post => response.json(post))
    .catch((err)=>{console.log(err);response.status(400).json(err)})

})

//# Update One
router.put("/:id", (req, response) => {

    Posts.update(req.body, { where :{id: req.params.id}}, { multi: true })
    .then(updatedPost => response.json(updatedPost))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
    
})

//# Delete One
router.delete("/:id", (req, response) => {

    Posts.destroy({ where :{id: req.params.id}}, {truncate: true})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
    
})


module.exports = router;