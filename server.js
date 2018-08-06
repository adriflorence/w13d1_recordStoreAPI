const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // function = needs to be invoked!!
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function () {
  console.log("RecordStore app is running!");
});

app.use(require('./controllers/index.js'));
