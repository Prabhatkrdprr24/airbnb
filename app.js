const bodyParser = require('body-parser');
const express = require('express');

const app = express();
//Local module
const hostRouter = require('./hostRouter');
const storeRouter = require('./storeRouter');

app.use(bodyParser.urlencoded({extended: true}));

app.use(storeRouter);
app.use("host", hostRouter);

app.use((req, res, next) => {
    res.statusCode = 404;
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Page Not Found</title>
            </head>
            <body>
                <h1>404 Page not found</h1>
            </body>
        </html>
    `);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
});