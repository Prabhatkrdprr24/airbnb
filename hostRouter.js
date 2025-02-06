const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Add Home</title>
            </head>
            <body>
                <h1>Add Your Home</h1>
                <form action="/host/add-home" method="POST">
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name of your home" />
                    <input type="submit" value="Add Home" />
                </form>
            </body>
        </html>
    `);
});

hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.body);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Home Added</title>
        </head>
        <body>
            <h1>Home Added sucessfully</h1>
            <a href="/">Go back to home</a>
        </body>
        </html>
    `)
});

module.exports = hostRouter;