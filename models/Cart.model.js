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
    },
    {
        timestamps: true
    }
);

const Cart = model("Cart", cartSchema);
Cart.syncIndexes()

module.exports = Cart;
