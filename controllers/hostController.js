const { Home } = require("../models/Home");

exports.getAddHome = (req, res, next) => {
    res.render("add-home", {pageTitle: "Add Home"});
};

exports.postAddHome = (req, res, next) => {
    const houseName = req.body.homeName;
    const newHome = new Home(newHome);
    newHome.save();
    res.render("home-added", {pageTitle: "Home added successfully"});
};