const joke = require("../model/jokes.model");

module.exports.createJoke = (req, res) => {
  //Creates a new joke to the database
  joke
    .create(req.body)
    .then((addedJoke) => {
      res.json({ joke: addedJoke });
    })
    .catch((err) => {
      res.json({ message: "No Joke Was Added:", error: err });
    });
};

module.exports.getOneJoke = (req, res) => {
  joke
    .findOne({ _id: req.params.id })
    .then((receivedOneJoke) => {
      res.josn({ joke: receivedOneJoke });
    })
    .catch((err) => {
      res.json({ message: "No Jokes Were Received:", error: err });
    });
};

module.exports.getAllJoke = (req, res) => {
  joke
    .find()
    .then((findAllJoke) => {
      res.json({ joke: findAllJoke });
    })
    .catch((err) => {
      res.json({ message: "No Jokes Were Retrieved", error: err });
    });
};

module.exports.updateJoke = (req, res) => {
  joke
    .updateOne({ _id: req.params.id }, req.body)
    .then((jokeUpdated) => {
      res.json({ joke: jokeUpdated });
    })
    .catch((err) => {
      res.json({ messgae: "No Jokes Were Updates", error: err });
    });
};

module.exports.deleteJoke = (req, res) => {
  joke
    .deleteOne()
    .then((jokeRemoved) => {
      res.json({ joke: jokeRemoved });
    })
    .catch((err) => {
      res.json({ message: "No Jokes Were Delete", error: err });
    });
};
