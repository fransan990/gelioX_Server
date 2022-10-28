const router = require("express").Router()
const Product = require('./../models/Product.model')
const { isAuthenticated } = require('./../middlewares/jwt.middleware')
const User = require("../models/User.model")

//AllProducts 
router.get("/getAllProducts", (req, res) => {

    Product
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//EditProduct
router.get('/editProduct/:id', (req, res) => {

    const { id } = req.params
    const { title, description, price, stock } = req.body

    Product
        .findByIdAndUpdate(id, { title, description, price, stock })
        .then(response => res.json(response))
        .catch(error => next(error))
})

//Details
router.get("/getOneProduct/:product_id", (req, res) => {

    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Save -- create
router.post("/saveProduct", (req, res) => {

    const { title, description, imageUrl, category, size, colors, price, stock } = req.body
    console.log(title, description, imageUrl, category, size, colors, price, stock)
    Product
        .create({ title, description, imageUrl, category, size, colors, price, stock })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Delete
router.post('/productdelete/:id', (req, res) => {

    const { id } = req.params

    Product
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Like
router.post('/visitCounter/:id', (req, res) => {

    const { id } = req.params

    Product
        .findByIdAndUpdate(id, { $inc: { visitCounter: 1 } }, { new: true })
        .then(response => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

//Counter Visit
router.post('/visitCounter', (req, res) => {

    Product
        .find()
        .sort({ visitCounter: -1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//Search
router.get('/listProductSearch', (req, res) => {

    const { string, size, category } = req.query


    Product
        .find({ $or: [{ title: { $regex: '.*' + string + '.*', $options: "i" } }, { $and: [{ size: size }, { category: { $regex: '.*' + category + '.*', $options: "i" } }] }] })
        // .find({ $and: [{ title: { $regex: '.*' + string + '.*', $options: "i" } }, { size }] })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post('/:id/productFav', isAuthenticated, (req, res, next) => {

    const { id } = req.params
    const { _id } = req.payload

    User
        .findByIdAndUpdate(_id, { $addToSet: { favProducts: id } }, { new: true })
        .then(response => res.json(response))
        .catch(error => next(error))
})

// Find Category 
router.post('/:id/productUnFav', isAuthenticated, (req, res, next) => {

    const { id } = req.params
    const { _id } = req.payload

    User
        .findByIdAndUpdate(_id, { $pull: { favProducts: id } }, { new: true })
        .then(response => res.json(response))
        .catch(error => next(error))
})

// Find Category 
router.get('/listProductSize/:form', (req, res) => {

    const { form } = req.params

    Product
        .find({ size: form })
        // .find({ category: "sneakers" })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router