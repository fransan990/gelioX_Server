const router = require("express").Router()

const Order = require('./../models/Order.model')

const { isAuthenticated } = require('./../middlewares/jwt.middleware')

//create order
router.post("/createOrder", isAuthenticated, (req, res, next) => {

    const { cartId, address } = req.body

    Order
        .create({ cart: cartId, address })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//get order
router.get("/getOrder", isAuthenticated, (req, res, next) => {

    const { cartId } = req.body

    Order
        .find({ cartId })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router