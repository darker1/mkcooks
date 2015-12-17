'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MealSchema = new Schema({
  name: String,
  description: String,
  ingredients: [Schema.Types.Mixed],
  markdown: String,
  thumbnail: String,
  datePosted: Date,
  serves: Number,
  author: String, //will convert to user later
  active: Boolean
});

module.exports = mongoose.model('Meal', MealSchema);