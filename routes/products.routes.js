const router = require("express").Router()

const Product = require('./../models/Product.model')

const { isAuthenticated } = require('./../middlewares/jwt.middleware')

//AllProducts 

router.get("/getAllProducts", isAuthenticated, (req, res) => {

    console.log("Usuario--", req.payloaad.username)

    Product
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//EditProduct

router.get('/:id/editProduct', (req, res) => {
//
    const { id } = req.params

    Product
        .findById(id)
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
//Save

router.post("/saveProduct", (req, res) => {

    // meter imagenes y colors!!!!!!!!!!!!!!!!!
    const { title, description, category, size, price, stock } = req.body

    Product
        .create({ title, description, category, size, price, stock })
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
// SaveProduct in Cart

router.post('/savedCart/:idProduct', isAuthenticated, (req, res) => {

    const { id } = req.params

    Product
        .findByIdAndUpdate(_id, { $push: { favProducts: id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
//Like

router.post('/productlike/:id', (req, res) => {

    const { id } = req.params

    Product
        .findByIdAndUpdate(id, { $inc: { like: 1 } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
//Search

router.get('/:form/listProductShearch', (req, res) => {

    const { form } = req.params

    Product
        .find({ category: { $regex: '.*' + form + '.*', $options: "i" } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
// Find Category 

router.get('/:form/listProductCategory', (req, res) => {

    const { form } = req.params

    Product
        .find({ category: form })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router