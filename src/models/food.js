'use strict';

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  dish: {type: String, required: true},
  number: { type: String},
});

const FoodModel = mongoose.model(`Food`, foodSchema);

module.exports = FoodModel;