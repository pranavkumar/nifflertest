'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FileSchema = new Schema({
  name: String,
  recipe_title: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('File', FileSchema);