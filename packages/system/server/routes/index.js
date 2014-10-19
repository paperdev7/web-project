'use strict';

module.exports = function(System, app, auth, database) {

  // Home route
  var index = require('../controllers/index');
  app.route('/')
    .get(index.render);

  app.route('/images/:fold1/:fold2/:file')
      .get(index.images);

  //app.param('path', index.article);
};
