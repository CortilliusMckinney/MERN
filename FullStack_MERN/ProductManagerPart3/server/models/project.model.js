const mongoose = require("mongoose");

const ProjectMgrSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProjectMgrSchema); //Turns Project into a model
module.exports = Product;
