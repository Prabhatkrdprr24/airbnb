const Home = require("../models/Home");

exports.getHome = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  res.render("index", { homes: registeredHomes, pageTitle: "Tumara airbnb" });
};
