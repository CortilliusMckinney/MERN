const jokesController = require("../controllers/jokes.controllers");

module.exports = (app) => {
  app.get("/api/getAllJoke", jokesController.getAllJoke);
  app.post("/api/createJoke", jokesController.createJoke);
  app.get("/api/getOneJoke/:id", jokesController.getOneJoke);
  app.put("/api/updateJoke/:id", jokesController.updateJoke);
  app.delete("/api/deleteJoke/:id", jokesController.deleteJoke);
};
