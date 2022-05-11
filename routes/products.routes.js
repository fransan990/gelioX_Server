const router = require("express").Router()
const Product = require('./../models/Product.model')
const { isAuthenticated } = require('./../middlewares/jwt.middleware')

//AllProducts 

//Funciona
router.get("/getAllProducts", (req, res) => {

    // console.log("Usuario--", req.payloaad.username)

    Product
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//EditProduct

//Funciona
router.get('/editProduct/:id', (req, res) => {

    const { id } = req.params
    const { title, description, price, stock } = req.body

    Product
        .findByIdAndUpdate(id, { title, description, price, stock })
        .then(response => res.json(response))
        .catch(error => next(error))
})

//Details

//funciona jeje
router.get("/getOneProduct/:product_id", (req, res) => {

    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
//Save -- create

//funciona jeje
router.post("/saveProduct", (req, res) => {

    // meter imagenes y colors!!!!!!!!!!!!!!!!!
    const { title, description, category, size, price, stock } = req.body

    Product
        .create({ title, description, category, size, price, stock })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
//Delete

//funciona jeje
router.post('/productdelete/:id', (req, res) => {

    const { id } = req.params

    Product
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
//Like
// funciona jeje
router.post('/visitCounter/:id', (req, res) => {

    const { id } = req.params

    Product
        .findByIdAndUpdate(id, { $inc: { visitCounter: 1 } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/visitCounter', (req, res) => {

    Product
        .find()
        .sort({ visitCounter: -1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
//Search
// funciona jeje
router.get('/listProductShearch/:form', (req, res) => {

    const { form } = req.params

    Product
        .find({ title: { $regex: '.*' + form + '.*', $options: "i" } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
// Find Category 
//funciona jeje
router.get('/listProductCategory/:form', (req, res) => {
    //:form
    const { form } = req.params

    Product
        .find({ category: form })
        // .find({ category: "sneakers" })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router