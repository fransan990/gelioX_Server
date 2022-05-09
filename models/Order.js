const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
    {
        cart: {
            type: Schema.Types.ObjectId,
            ref: 'Cart',
        },
        address: {
            type: Object,
            required: true
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

module.exports = Order;
