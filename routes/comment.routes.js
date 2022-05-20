const router = require("express").Router();
const app = require("../app");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const Comment = require('../models/Comment.model');

// funciona jeje
router.post("/createComment", isAuthenticated, (req, res, next) => {

    const {_id} = req.payload
    const { id, description } = req.body

    Comment
        .create({ owner: _id, product: id, description })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

});

router.get("/getAllComments", isAuthenticated,(req,res,next) => {

    const {id} = req.body

    Comment
        .find({$in:{product: id}})
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
//edit comment
//funciona jeje
router.post('/edit/:id', (req, res) => {

    const { id } = req.params
    const { description } = req.body

    Comment
        .findByIdAndUpdate(id, { description })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
//delete comment
//Tiene que ser Admin

router.post('/delete/:id', (req, res) => {

    const { id } = req.params

    Comment
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router