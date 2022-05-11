const router = require("express").Router()

const User = require('./../models/User.model')

const { isAuthenticated } = require('./../middlewares/jwt.middleware')

//Product Save Profile

//payload user


//funciona jeje
router.put('/productFav', isAuthenticated, (req, res, next) => {

    // deberías sacar el id del usuario del req.payload
    // const {_id} = req.payload

    const owner = req.payload._id

    User
        .findByIdAndUpdate(owner, { $addToSet: { favProducts: id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Editar perfil

router.put('/editProfile', (req, res, next) => {

    // deberías sacar el id del usuario del req.payload
    // const {_id} = req.payload
    // para testear:

    const owner = req.payload.id
    console.log(owner)

    console.log(req.payload)

    User
        .findByIdAndUpdate(owner, { username, phoneNumber, })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})




//payload user ADMIN

//Miguel te toca

// router.post('/backOffice', (req, res, next) => {

//     const { id } = req.payload

//     console.log(req.payload)


// })
module.exports = router
