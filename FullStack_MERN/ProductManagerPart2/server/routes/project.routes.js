const ProjectMgrController = require("../controllers/project.controller"); //Imports controller

module.exports = (app) => {
  app.get("/api/getProducts", ProjectMgrController.getProducts);
  app.get("/api/getOneProducts/:id", ProjectMgrController.getOneProduct);
  app.post("/api/new", ProjectMgrController.createProducts);
  app.delete("/api/deleteProduct/:id", ProjectMgrController.DeleteOneProduct);
  app.put("/api/UpdateOneProduct/:id", ProjectMgrController.UpdateOneProduct);
};
