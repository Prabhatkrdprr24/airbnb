const express = require("express");
const hostRouter = express.Router();
const Path = require("path");

const rootDir = require("../util/path-util");

hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(Path.join(rootDir, "views", "add-home.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.body);
    res.sendFile(Path.join(rootDir, "views", "home-added.html"));
});

module.exports = hostRouter;