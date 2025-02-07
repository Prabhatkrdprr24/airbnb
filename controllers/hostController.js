const Home = require("../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "Add Home" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;

  const newHome = new Home(houseName, price, location, rating, photoUrl);

  newHome.save(err => {
    if (err) {
      res.redirect('/');
    }
    else{
        res.render("home-added", { pageTitle: "Home added successfully" });
    }
  });
};
