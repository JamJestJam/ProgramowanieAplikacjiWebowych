const controller = require("../controllers/productCategory.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/productsCategory", controller.getAll);
  app.post("/productsCategory", controller.add);
  app.put("/productsCategory", controller.update);
  app.delete("/productsCategory/:id", controller.delete);
};