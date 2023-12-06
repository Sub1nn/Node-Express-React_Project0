const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  //productSchema contains fields and timestamps. Fields are data information and timeStamps is used to track when the data is created or modified.
  {
    f_name: {
      type: String,
      required: [true, "please enter the product"],
    },
    l_name: {
      type: String,
      required: true,
      default: 0,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

//after schema is created inside our MongoDB, we can create Models:

const product = mongoose.model("Product", productSchema);
module.exports = product;
