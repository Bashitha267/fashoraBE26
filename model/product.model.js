const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  main_image: { type: String, required: true },
  additional_images: [{ type: String }],
  id: { type: String, required: true, unique: true },
  color: { type: String, required: true },
  sizes: [{type:String}],
  country: { type: String, required: true },
  qty: { type: Number, required: true },
  category: { type: String, required: true },
  added_date:{
    type:Date,
    default:Date.now
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
