const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://praveenpk8688_db_user:<db_password>@cluster0.u5n1rym.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("MongoDB connected"));

// Schema
const ProductSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: String,
  originalPrice: String
});

const Product = mongoose.model("Product", ProductSchema);

// API
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
