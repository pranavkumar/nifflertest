'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  title: String,
  description: String,
  username: String,
  comments:[Schema.Types.Mixed],
  upvotes:{type:Number,default:0},
  downvotes:{type:Number,default:0},
  created_at:{type:Date,default:Date.now},
  active: Boolean
});

module.exports = mongoose.model('Recipe', RecipeSchema);