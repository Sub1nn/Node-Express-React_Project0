require("dotenv").config();
const express = require("express"); //this express is inside node_modules folder
const app = express(); //app is the instance of express
const mongoose = require("mongoose"); //mongoose is also inside node_modules folder
const productRoute = require("./routes/productRoute");
const errorHandler = require("./middleware/errorHandler");

const MONGO_URL = process.env.MONGO_URL || process; //secured the url inside .env and accessing it
const PORT = process.env.PORT || process; //secured the port inside .env and accessing it
app.use(express.json()); //json middleware
app.use(express.urlencoded({ extended: false })); //form middleware
//urlencoded is a method that parses URL-encoded data, decodes it (in the format of key1=value1) into a JS object
app.use("/api/products", productRoute); //middleware to use the product route. We include api because we want out client to first put api before accessing the routes.

//Now the server only runs in the browser after declaring routes as follows:

app.get("/", (req, res) => {
  //res.send("Welcome to the server on port 3000");
  throw new Error("Fake Error");
});
app.get("/blog", (req, res) => {
  res.send("Welcome to the blog of Mr khatiwada on port 3000");
});

// making the server listen to the port and running the callback function.
// app.listen(3000, () => {
//   console.log("server started on port 3000");
// });

app.use(errorHandler);

mongoose.set("strictQuery", false); //removes the mongoose query messages string.
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      // since we're listening to the port only after connecting to mongoDB, we moved the code here instead.
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
