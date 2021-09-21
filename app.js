const express = require('express');
const app = express();
//cross origin resource sharing package
const cors =  require('cors');
//configuration i.e stagging, production etc
const config =  require('config');
//to extract/parse the body of incoming request
const bodyParser = require('body-parser');
// to extract json data and make it readable
app.use(bodyParser.json());
// to support URL-encoded bodies rich or simple
app.use(bodyParser.urlencoded({ extended: false }));
//enabling cross origin resource sharing i.e communication of different server
app.use(cors());

const apiInventory = require('./routes/api-inventory');
const apiCart = require('./routes/api-cart');

app.use('/inventory', apiInventory )
app.use('/cart', apiCart )
//for securing express app by adding headers
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(7000)