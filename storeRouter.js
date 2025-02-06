const express = require("express");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Hamara airbnb</title>
            </head>
            <body>
                <h1>Welcome to airbnb</h1>
                <a href="/host/add-home">Add Home</a>
            </body>
        </html>
    `);
});

module.exports = storeRouter;