const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8110;
const api = require('./api');
const validator = require('./validator');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}))

app.get('/', function (req, res, next) {
	res.render('index')
    next();
});

app.post('/signup', validator.register, api.register);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = app;