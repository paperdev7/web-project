'use strict';

// The Package is past automatically as first parameter
module.exports = function(Mcomments, app, auth, database) {

  app.get('/mcomments/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/mcomments/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/mcomments/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/mcomments/example/render', function(req, res, next) {
    Mcomments.render('index', {
      package: 'mcomments'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
