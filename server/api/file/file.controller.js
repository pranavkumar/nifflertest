'use strict';

var _ = require('lodash');
var File = require('./file.model');
var uuid = require('node-uuid');
var fs = require('fs');

// Get list of files
exports.index = function(req, res) {
  File.find(function (err, files) {
    if(err) { return handleError(res, err); }
    return res.json(200, files);
  });
};

// Get a single file
exports.show = function(req, res) {
  console.log(req.params.recipe_title);
  File.findOne({recipe_title:req.params.recipe_title}, function (err, file) {
    console.log(file);
    if(err) { return handleError(res, err); }
    if(!file) { return res.send(404); }
    return res.json(file);
  });
};

// Creates a new file in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  console.log(req.files);

  var temp={recipe_title:req.body.recipeTitle,name:req.files.recipePic.name};

  File.create(temp, function(err, file) {
    if(err) { return handleError(res, err); }
    res.redirect('/recipe/'+file.recipe_title.replace(/ /g,"+"));
  });
  
};

// Updates an existing file in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  File.findById(req.params.id, function (err, file) {
    if (err) { return handleError(res, err); }
    if(!file) { return res.send(404); }
    var updated = _.merge(file, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, file);
    });
  });
};

// Deletes a file from the DB.
exports.destroy = function(req, res) {
  File.findById(req.params.id, function (err, file) {
    if(err) { return handleError(res, err); }
    if(!file) { return res.send(404); }
    file.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}