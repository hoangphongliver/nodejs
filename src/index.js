const express = require('express');
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const db = require('./config-db');
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
require('dotenv').config()

// Connect MongoDB
db.connect();

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'assets')))
app.use(morgan('combined'));

// handlebars
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// routes(app);
app.use('/', routes);


app.listen(process.env.PORT, () => console.log(`Epress app listening at http://localhost:${process.env.PORT}`))