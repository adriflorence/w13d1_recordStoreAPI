const express = require('express');
const recordStore = new express.Router();

recordStore.use('/records', require('./records.js'));
recordStore.use('/bands', require('./bands.js'));

recordStore.get('/', function (req, res) {
  res.json({data: "Welcome to the Record Store! "});
});

recordStore.get('/about', function (req, res) {
  res.json({data: "Here's what we're about! "});
});

module.exports = recordStore;
