const router = require("express").Router()

const Order = require('./../models/Order.model')

const { isAuthenticated } = require('./../middlewares/jwt.middleware')
const Cart = require("../models/Cart.model")

//create order
router.post("/createOrder/:cart", isAuthenticated, (req, res, next) => {

    const { cart } = req.params
    const { address1, address2, city, postalCode } = req.body
    const { _id } = req.payload

    const address = { address1, address2, postalCode, city }

    const promises = [
        Order.create({ cart, address }),
        Cart.findByIdAndUpdate(cart, { status: 'ORDERED' })
    ]

    Promise.all(promises)
        .then(() => Cart.create({ owner: _id, items: [], status: 'ACTIVE' }))
        .then(() => res.json('ok'))
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