'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var mobileMenuSchema = new Schema({
  pid:{
    type:String,
    trim:true
  },
  name:{
    type:String,
    required:true,
    trim:true
  },
  menus:[
          {
            name:{
              type:String,
              required:true,
              trim:true
            }
          }
  ],
  title:{
    type:String,
    required:true,
    trim:true
  },
  url:{
    type:String,
    required:true,
    trim:true
  },
  disable:{
    type:Boolean,
    required:true
  },
  icon:{
    type:String,
    trim:true
  },
  sort:{
    type:Number,
    trim:true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Validations
 */
mobileMenuSchema.path('name').validate(function(name) {
  return !!name;
}, 'Title cannot be blank');

mobileMenuSchema.path('title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

mobileMenuSchema.path('url').validate(function(url) {
  return !!url;
}, 'Content cannot be blank');


/**
 * Statics
 */
mobileMenuSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('mobileMenus', mobileMenuSchema);
