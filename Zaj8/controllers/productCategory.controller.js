const Category = require('../models/productCategory.model');

const categories = [];

exports.getAll = (req, res) => {
  res.status(200).send(categories);
};

exports.add = (req, res) => {
  const category = new Category(req.body.name);
  categories.push(category);
  res.status(201).send(category);
}

exports.update = (req, res) => {
  const find = categories.find(a => a.id === req.body.id);
  if (find) {
    find.name = req.body.name;
    res.status(200).send("Updated");
  } else res.status(304).send();
}

exports.delete = (req, res) => {
  const find = categories.find(a => a.id === req.params.id);
  if (find) {
    categories.splice(categories.indexOf(find), 1);
    res.status(200).send("Deleted");
  } else res.status(404).send();
}