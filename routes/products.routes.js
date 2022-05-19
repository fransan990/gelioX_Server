const router = require("express").Router()
const Product = require('./../models/Product.model')
const { isAuthenticated } = require('./../middlewares/jwt.middleware')
const User = require("../models/User.model")

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
    const { title, description, imageUrl, category, size, colors, price, stock } = req.body

    Product
        .create({ title, description, imageUrl, category, size, colors, price, stock })
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
router.get('/listProductSearch', (req, res) => {

    const { form, size, category } = req.query
    console.log('esta es la mierda que llega al server ---------->', req.query)
    // console.log('el form server ------->', form)
    // console.log('el size server ------->', size)
    // console.log('la category server ------->', category)



    if (form === '' && size === '' && category == '') {

        console.log('tengo que buscar todoooooosooooos')
        Product
            .find()
            .then(response => {
                res.json(response)


            })
            .catch(err => res.status(500).json(err))
    } else {
        console.log('Else')


        Product
            .find({ $or: [{ title: { $regex: '.*' + form + '.*', $options: "i" } }, { size: size }, { category: { $regex: '.*' + category + '.*', $options: "i" } }] })
            .then(response => {
                res.json(response)
                console.log('popino')

            })
            .catch(err => res.status(500).json(err))
    }

})


router.post('/:id/productFav', isAuthenticated, (req, res, next) => {
    // res.send("hola")

    const { id } = req.params
    const { _id } = req.payload

    User
        .findByIdAndUpdate(_id, { $addToSet: { favProducts: id } })
        .then(response => res.json(response))
        .catch(error => next(error))
})
// Find Category 
//funciona jeje

//hacer ruta global
router.get('/listProductSize/:form', (req, res) => {
    //:form
    const { form } = req.params

    const { buscado } = req.body
    const { buscador } = req.body

    Product
        .find({ size: form })
        // .find({ category: "sneakers" })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router