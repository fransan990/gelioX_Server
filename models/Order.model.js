const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
    {
        cart: {
            type: Schema.Types.ObjectId,
            ref: 'Cart',
        },
        address: {
            address1: String,
            address2: String,
            postalCode: Number,
            city: String
        },
        // status: {
        //     type: String,
        //     default: "pending"
        // }, ------------------------Nose si meterlo
    },
    {
        timestamps: true
    }
);

const Order = model("Order", orderSchema);
Order.syncIndexes()

module.exports = Order;
