const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

//# Get All
router.get("/", (req, response) => {

    Comments.findAll()
    .then(Comments => response.json(Comments))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
});

//# Get One
router.get("/byId/:parentId", (req, response) => {

    Comments.findAll({where: { PostId: req.params.parentId }})
    .then(Comment => response.json(Comment))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
    
})
//# Create One
router.post("/", (req, response) => {
    // let responseData = {
    //     success: false,

    //     errors: {}
    // };

    Comments.create(req.body)
    .then(Comment => response.json(Comment))
    .catch((err)=>{console.log(err);response.status(400).json(err)})

})

//# Update One
router.put("/:id", (req, response) => {

    Comments.update(req.body, { where :{id: req.params.id}}, { multi: true })
    .then(updatedComment => response.json(updatedComment))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
    
})

//# Delete One
router.delete("/:id", (req, response) => {

    Comments.destroy({ where :{id: req.params.id}}, {truncate: true})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch((err)=>{console.log(err);response.status(400).json(err)})
    
})


module.exports = router;