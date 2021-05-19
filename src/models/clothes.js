'use strict';

const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  type: {type: String, required: true},
  color: { type: String},
});

const ClothesModel = mongoose.model(`Clothes`, clothesSchema);

module.exports = ClothesModel;




