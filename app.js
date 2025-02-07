const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const rootDir = require('./util/path-util');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

//Local module
const { hostRouter } = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');

app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use(storeRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
    res.statusCode = 404;
    res.render('404', {pageTitle: 'Page Not Found'});
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
});