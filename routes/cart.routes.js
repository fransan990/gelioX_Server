const router = require("express").Router()

const Cart = require('./../models/Cart.model')
const User = require('./../models/User.model')

const { isAuthenticated } = require('./../middlewares/jwt.middleware')
const { find } = require("./../models/Cart.model")

//create cart
router.get("/getCart", isAuthenticated, (req, res, next) => {

    const { _id } = req.payload

    Cart
        .find({ owner: _id, status: 'ACTIVE' })
        .then(carritobacano => res.json(carritobacano))
        .catch(err => res.status(500).json(err))
})

//add item
router.post("/addItem", isAuthenticated, (req, res, next) => {

    const { _id } = req.payload
    const { productId, productQuantity } = req.body

    Cart
        .findOne({ owner: _id, status: 'ACTIVE' })
        .then(({ _id }) => {

            return Cart.findByIdAndUpdate(_id, { $push: { items: { product: productId, quantity: productQuantity } } }, { new: true })
        })
        .then(newCart => res.json(newCart))
        .catch(err => res.status(500).json(err))
})

//update quantity
router.put("/updateQuantity", isAuthenticated, (req, res, next) => {

    const { _id } = req.payload
    const { productId, newQuantity } = req.body

    Cart
        .findOne({ owner: _id, status: 'ACTIVE' })
        .then(response => {
            response.items.forEach(item => {
                if (item.product == productId) {
                    item.quantity = newQuantity
                }
            });
            return response.save()
        })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//deleteItem
router.put("/deleteItem", isAuthenticated, (req, res, next) => {

    const { _id } = req.payload
    const { productId } = req.body

    Cart
        .findOne({ owner: _id, status: 'ACTIVE' })
        .then(response => {
            response.items.forEach((item, idx) => {
                if (item.product == productId) {
                    response.items.splice(idx, 1)
                }
            });
            return response.save()
        })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//getAllItems
router.get("/getAllItems", isAuthenticated, (req, res, next) => {

    const { _id } = req.payload

    Cart
        .findOne({ owner: _id, status: 'ACTIVE' })
        .populate('items.product')
        .then(({ items }) => {
            res.json(items)
        })
        .catch(err => res.status(500).json(err))
})

module.exports = router