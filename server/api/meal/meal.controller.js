'use strict';

var _ = require('lodash');
var Meal = require('./meal.model');

// Get list of meals
exports.index = function(req, res) {
  var ingredient = req.param('ingredient');

  if(ingredient){
    var regex = new RegExp(["^", ingredient, "$"].join(""), "i");

    Meal.find({'ingredients': {'$elemMatch':{ 'ingredient' : regex }}},function (err, meals) {
      if(err) { return handleError(res, err); }
      return res.status(200).json(meals);
    });
  }
  else{
    Meal.find(function (err, meals) {
      if(err) { return handleError(res, err); }
      return res.status(200).json(meals);
    });
}};

// Get a single meal
exports.show = function(req, res) {
  Meal.findById(req.params.id, function (err, meal) {
    if(err) { return handleError(res, err); }
    if(!meal) { return res.status(404).send('Not Found'); }
    return res.json(meal);
  });
};

// Creates a new meal in the DB.
exports.create = function(req, res) {
  Meal.create(req.body, function(err, meal) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(meal);
  });
};

// Updates an existing meal in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Meal.findById(req.params.id, function (err, meal) {
    if (err) { return handleError(res, err); }
    if(!meal) { return res.status(404).send('Not Found'); }
    var updated = _.merge(meal, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(meal);
    });
  });
};

// Deletes a meal from the DB.
exports.destroy = function(req, res) {
  Meal.findById(req.params.id, function (err, meal) {
    if(err) { return handleError(res, err); }
    if(!meal) { return res.status(404).send('Not Found'); }
    meal.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}