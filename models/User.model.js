const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      // required: [true, 'Indica el nombre completo'],
      minlength: [4, 'El nombre debe tener mínimo 4 caracteres'],
    },
    username: {
      type: String,
      trim: true,
      required: [true, 'Indica el username'],
      minlength: [4, 'El nombre debe tener mínimo 4 caracteres'],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, 'Indica el email'],
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: String,
      match: [/^\d{9}$/, 'El numero de telefono debe de tener nueve dígitos'],
    },
    postalCode: {
      type: Number,
      match: [/^\d{5}$/, 'El código postal debe contener cinco dígitos'],
    },
    role: {
      enum: ["ADMIN", "SUPPLIER", "INFLUENCER", "USER"],
      default: "USER",
      type: String
    },
    img: {
      type: String
    },
    favProducts: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }],
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
