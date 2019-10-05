const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

const errorController = require('./controllers/error');

const adminData = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bulma/css')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/@mdi/font/css')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/@mdi/font/fonts')));

app.use(adminData.routes);

app.use(errorController.get404);

app.listen(3000);