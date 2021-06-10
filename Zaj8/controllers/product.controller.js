const Product = require('../models/product.model');

const products = [];

exports.getAll = (req, res) => {
  res.status(200).send(products);
};

exports.add = (req, res) => {
  const product = new Product(req.body.name, req.body.description, req.body.price);
  products.push(product);
  res.status(201).send(product);
}

exports.update = (req, res) => {
  const find = products.find(a => a.id === req.body.id);
  if (find) {
    find.name = req.body.name;
    find.description = req.body.description;
    find.price = req.body.price;
    res.status(200).send("Updated");
  } else res.status(304).send();
}

exports.delete = (req, res) => {
  const find = products.find(a => a.id === req.params.id);
  if (find) {
    products.splice(products.indexOf(find), 1);
    res.status(200).send("Deleted");
  } else res.status(404).send();
}