const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  //productSchema contains fields and timestamps. Fields are data information and timeStamps is used to track when the data is created or modified.
  {
    Name: {
      type: String,
      required: [true, "please enter the product"],
      trim: true,
    },
    Company: {
      type: String,
      required: false,
      trim: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
    Image: {
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
