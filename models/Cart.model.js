const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        items: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product'
                },
                quantity: {
                    type: Number,
                    default: 0,
                },
            },
        ],
        status: {
            type: String,
            enum: ['ACTIVE', 'ORDERED'],
            default: 'ACTIVE'
        }
    },
    {
        timestamps: true
    }
);

const Cart = model("Cart", cartSchema)

Cart.syncIndexes()

module.exports = Cart
