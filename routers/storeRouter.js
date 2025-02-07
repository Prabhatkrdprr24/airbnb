const express = require("express");
const Path = require("path");

const rootDir = require("../util/path-util");
const { registeredHomes } = require("./hostRouter");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
    console.log(registeredHomes);
    res.render('index', {homes: registeredHomes, pageTitle: 'Tumara airbnb'});
});

module.exports = storeRouter;