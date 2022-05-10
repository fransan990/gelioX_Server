const router = require("express").Router()

const User = require('./../models/User.model')

const { isAuthenticated } = require('./../middlewares/jwt.middleware')

//Product Save Profile

//payload user


//funciona jeje
router.put('/:id/productFav', (req, res, next) => {

    // deberías sacar el id del usuario del req.payload
    // const {_id} = req.payload
    const { id } = req.params

    // para testear:
    const { userId } = req.body

    console.log(req.payload)

    User
        .findByIdAndUpdate(userId, { $addToSet: { favProducts: id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Editar perfil


router.put('/user/editProfile', (req, res, next) => {

    // deberías sacar el id del usuario del req.payload
    // const {_id} = req.payload
    // para testear:
    const { userId } = req.body

    console.log(req.payload)

    User
        .findByIdAndUpdate(userId, { username, phoneNumber, })
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
