'use strict';

var mobileMenu = require('../controllers/mobileMenuCtrl');
// The Package is past automatically as first parameter
module.exports = function(MobileMenus, app, auth, database) {

  app.route('/mobileMenu/')
     .get(mobileMenu.all)
     .post(mobileMenu.create);
  app.get('/mobileMenu/list',mobileMenu.all);

  app.route('/mobileMenu/:_id')
     .put(mobileMenu.update);

   app.param('_id', mobileMenu.menu);
/*
  app.get('/mobileMenu/create', function(req, res, next) {
    res.send('Only authenticated users can access this');
  });
*/
};
