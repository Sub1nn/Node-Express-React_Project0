const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  //productSchema contains fields and timestamps. Fields are data information and timeStamps is used to track when the data is created or modified.
  {
    name: {
      type: String,
      required: [true, "please enter the product"],
      trim: true,
    },
    company: {
      type: String,
      required: false,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//after schema is created inside our MongoDB, we can create Models:

const product = mongoose.model("Product", productSchema);
module.exports = product;
