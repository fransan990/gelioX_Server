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
        imageUrl: {
            type: String
        },
        category: {
            type: String,
            enum: ["sneakers", "apparel", "Nike"],
            default: "Nike"
        },
        size: {
            type: String,
            enum: ["XXL", "Xl", "L", "M", "S", "XS"],
            default: "M"
        },
        colors: [{
            type: String,
        }],
        price: {
            type: Number,
            required: [true, 'El precio es obligatorio']
        },
        stock: {
            type: Number,
            required: [true, 'El stock es obligatorio']
        },
        visitCounter: {
            type: Number,
            default: 0
        },
        favproduct: [{
            type: String,
        }],
    },
    {
        timestamps: true
    }
);

const Product = model("Product", productSchema);
Product.syncIndexes()

module.exports = Product;
