const express = require("express");
const Path = require("path");

const rootDir = require("../util/path-util");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
    // console.log("rootDir", rootDir);
    res.sendFile(Path.join(rootDir, "views", "index.html"));
});

module.exports = storeRouter;