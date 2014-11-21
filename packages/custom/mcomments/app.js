'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Mcomments = new Module('mcomments');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Mcomments.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Mcomments.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Mcomments.menus.add({
    title: 'mcomments example page',
    link: 'mcomments example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Mcomments.aggregateAsset('css', 'mcomments.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Mcomments.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Mcomments.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Mcomments.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Mcomments;
});
