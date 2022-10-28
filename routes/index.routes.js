const router = require("express").Router();

router.use("/auth", require('./auth.routes'))
router.use("/product", require('./products.routes'))
router.use("/user", require('./user.routes'))
router.use("/cart", require('./cart.routes'))
router.use("/order", require('./order.routes'))
router.use("/comment", require('./comment.routes'))
router.use("/upload", require('./upload.routes'))

module.exports = router;
