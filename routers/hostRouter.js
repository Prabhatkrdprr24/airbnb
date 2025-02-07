const express = require("express");
const hostRouter = express.Router();
const Path = require("path");

const rootDir = require("../util/path-util");
const exp = require("constants");

hostRouter.get("/add-home", (req, res, next) => {
    res.render("add-home", {pageTitle: "Add Home"});
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    registeredHomes.push(req.body);
    res.render("home-added", {pageTitle: "Home added successfully"});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;