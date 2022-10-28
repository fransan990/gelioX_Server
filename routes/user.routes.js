const router = require("express").Router()
const User = require('./../models/User.model')
const { isAuthenticated } = require('./../middlewares/jwt.middleware')


// Get user details
router.get('/profile', isAuthenticated, (req, res, next) => {

    const { _id } = req.payload

    User
        .findById(_id)
        .populate('favProducts')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Editar perfil

router.put('/editProfile', (req, res, next) => {

    const owner = req.payload.id

    User
        .findByIdAndUpdate(owner, { username, phoneNumber, })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router
