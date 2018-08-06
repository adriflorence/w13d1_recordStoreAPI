const express = require('express');
const bandRouter = new express.Router();

let band1 = {name: "Radiohead", country: "UK", genre: "indie rock"}
let band2 = {name: "Public Service Broadcasting", country: "UK", genre: "electronic"}
let band3 = {name: "The Decemberists", country: "USA", genre: "indie rock"}
let band4 = {name: "Future Islands", country: "USA", genre: "synthpop"}
let band5 = {name: "Beirut", country: "USA", genre: "indie folk"}
let band6 = {name: "Noir Desir", country: "France", genre: "rock"}
let band7 = {name: "Parov Stelar", country: "Austria", genre: "nu-jazz"}
let bands = [band1, band2, band3, band4, band5, band6, band7];

bandRouter.get('/', function (req, res) {
  res.json({data: bands});
});

// show one band
bandRouter.get('/:id', function (req, res) {
  let index = req.params.id;
  res.json({data: bands[index]});
});

// show all the bands
bandRouter.get('/', function (req, res) {
  res.json(bands);
});

// create a new band
bandRouter.post('/', function(req, res) {
  bands.push(req.body);
  res.json(bands);
});

// update a band
bandRouter.put('/:id', function (req, res) {
  let index = req.params.id;
  bands[index] = req.body;
  res.json(bands);
});

// delete a band
bandRouter.delete('/:id', function (req, res) {
  let index = req.params.id;
  bands.splice(index, 1);
  res.json(bands);
});

module.exports = bandRouter;
