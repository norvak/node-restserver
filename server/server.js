const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());


 
app.get('/', function (req, res) {
  res.json('Hello World')
})

 
app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
})