'use strict';

var mean = require('meanio');
var fs = require('fs');

exports.render = function(req, res) {

  var modules = [];
  // Preparing angular modules list with dependencies
  for (var name in mean.modules) {
    modules.push({
      name: name,
      module: 'mean.' + name,
      angularDependencies: mean.modules[name].angularDependencies
    });
  }

  function isAdmin() {
    return req.user && req.user.roles.indexOf('admin') !== -1;
  }

  // Send some basic starting info to the view
  res.render('index', {
    user: req.user ? {
      name: req.user.name,
      _id: req.user._id,
      username: req.user.username,
      roles: req.user.roles,
      files:req.user.files
    } : {},
    modules: modules,
    isAdmin: isAdmin,
    adminEnabled: isAdmin() && mean.moduleEnabled('mean-admin')
  });
};

exports.images = function(req,res){
    var path = __dirname.split('/')[0]+__dirname.split('/')[1]+__dirname.split('/')[2]+__dirname.split('/')[3]+__dirname.split('/')[4];
   // console.log(rootPath);
    fs.readFile('/Users/huang/Sites/hybrid/mean/web-project/'+req.params.fold1+'/'+req.params.fold2+'/'+req.params.file, function (err, data) {
        if (err) throw err;

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
        res.end();
    });
};
