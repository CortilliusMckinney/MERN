const ProjectMgrController = require("../controllers/project.controller"); //Imports controller

module.exports = (app) => {
  app.get("/api/getProducts", ProjectMgrController.getProducts);
  app.get("/api/getOneProducts/:id", ProjectMgrController.getOneProduct);
  app.post("/api/new", ProjectMgrController.createProducts);
  // app.delete('/api/',)
};
