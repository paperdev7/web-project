'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  MobileMenus = mongoose.model('mobileMenus'),
  _ = require('lodash');

exports.menu = function(req, res, next, id) {
  MobileMenus.load(id, function(err, menu) {
    if (err) return next(err);
    if (!menu) return next(new Error('Failed to load menu ' + id));
    req.menu = menu;
    next();
  });
};

/**
 * Create an menus
 */
exports.create = function(req, res) {
  var mobileMenu = new MobileMenus(req.body);
  mobileMenu.user = req.user;

  mobileMenu.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the mobileMenus'
      });
    }
    res.json(mobileMenu);
  });
};
/**
* update of menus
*/
exports.update = function(req,res){
  var menu = req.menu;
  menu = _.extend(menu, req.body);
  menu.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the menu'
      });
    }
    res.json(menu);
  });
};
/**
 * List of menus
 */
exports.all = function(req, res) {
  MobileMenus.find().sort('sort').exec(function(err, datas) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the articles'
      });
    }
    //res.json({sss:[{name:'aaaa'},{name:'bbbbb'}]});
    res.json(datas);
  });
};
