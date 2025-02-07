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
const errorController = require('./controllers/errorController');

app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use(storeRouter);
app.use("/host", hostRouter);

app.use(errorController.get404);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
});