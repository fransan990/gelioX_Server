const router = require("express").Router();
const app = require("../app");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const Comment = require('../models/Comment.model');

// funciona jeje
router.post("/createComment/:id", (req, res, next) => {

    const owner = req.payload.id
    const { description } = req.body
    const { id } = req.params

    Comment
        .create({ owner: owner, product: id, description })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

});
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