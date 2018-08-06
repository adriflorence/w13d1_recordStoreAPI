const express = require('express');
const recordRouter = new express.Router();

let record1 = {title: "Night Moves", author: "Bob Seger", year: "1976", genre: "rock", price: "14.00"}
let record2 = {title: "Aladdin Sane", author: "David Bowie", year: "1973", genre: "glam rock", price: "20.00"}
let record3 = {title: "White Feathers", author: "Kajagoogoo", year: "1983", genre: "electro pop", price: "34.00"}
let record4 = {title: "I Say I Say I Say", author: "Erasure", year: "1994", genre: "electro pop", price: "19.00"}
let records = [record1, record2, record3, record4];

recordRouter.get('/', function (req, res) {
  res.json({data: records});
});

// show one record
recordRouter.get('/:id', function (req, res) {
  let index = req.params.id;
  res.json({data: records[index]});
});

// show all the records
recordRouter.get('/', function (req, res) {
  res.json(records);
});

// create a new record
recordRouter.post('/', function(req, res) {
  records.push(req.body);
  res.json(records);
});

// update a record
recordRouter.put('/:id', function (req, res) {
  let index = req.params.id;
  records[index] = req.body;
  res.json(records); // sends back array
});

// delete a record
// we can now handle multiple verbs on the same route! hooray!
recordRouter.delete('/:id', function (req, res) {
  let index = req.params.id;
  records.splice(index, 1);
  res.json(records);
});

module.exports = recordRouter;
