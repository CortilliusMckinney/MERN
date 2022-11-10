const Product = require("../models/project.model");

module.exports.getProducts = (req, res) => {
  Product.find()
    .then((allProduct) => {
      console.log(allProduct);
      res.json({ products: allProduct });
    })
    .catch((err) => {
      res.json({ message: "No Products Were Retreived", error: err });
    });
};

module.exports.createProducts = (req, res) => {
  console.log(req.body); //Debug console.log
  Product.create(req.body)
    .then((addOneProduct) => {
      res.json({ Product: addOneProduct });
    })
    .catch((err) => {
      res.json({ message: "No Products Were Added", error: err });
    });
};

module.exports.getOneProduct = (req, res) => {
  console.log(req.body); //Debug console.log
  Product.findOne({ _id: req.params.id })
    .then((e) => res.json(e))
    .catch((err) => {
      res.json({ message: "No Products Were found", error: err });
    });
};

module.exports.DeleteOneProduct = (req, res) => {
  console.log(req.body); //Debug console.log
  console.log("new paramsID", req.params.id);
  Product.deleteOne({ _id: req.params.id })
    .then((e) => res.json(e))
    .catch((err) => {
      res.json({ message: "No Products Were deleted", error: err });
    });
};

module.exports.UpdateOneProduct = (req, res) => {
  console.log(req.body); //Debug console.log
  console.log("update paramsID", req.params.id);
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((e) => res.json(e))
    .catch((err) => {
      res.json({ message: "No Products Were Updated", error: err });
    });
};
