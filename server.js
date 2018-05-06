const http = require('http');
const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');


//Load Models
//require('./models/User');

/**********************ROUTES***********************/
//Load Routes
const burgers = require('./controllers/burgers');

const app = express();

/*********************MIDDLEWARE********************/
//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//static folder
app.use(express.static(path.join(__dirname, 'public')));


//Use Routes
app.use('/', burgers);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});
