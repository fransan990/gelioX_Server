const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'El nombre es obligatorio']
        },
        description: {
            type: String,
            required: [true, 'La descripcion es obligatoria']
        },
        images: [{
            type: String
        }],
        category: {
            type: Array
        },
        size: {
            type: Array
        },
        colors: {
            type: Array
        },
        price: {
            type: Number,
            required: [true, 'El precio es obligatorio']
        },
        stock: {
            type: Number,
            required: [true, 'El stock es obligatorio']
        },
        likesCounter: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps: true
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
