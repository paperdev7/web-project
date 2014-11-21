'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * mComment Schema
 */
var mCommentSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  parent: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  seq: {
    type: String,
    required: true,
    trim:true
  }
});

/**
 * Validations
 */
 /*
mCommentSchema.path('title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

mCommentSchema.path('content').validate(function(content) {
  return !!content;
}, 'Content cannot be blank');
*/
/**
 * Statics
 */
 /*
mCommentSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username files').exec(cb);
};
*/
mongoose.model('mComment', mCommentSchema);
