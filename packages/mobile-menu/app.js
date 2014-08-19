'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MobileMenu = new Module('mobile-menu');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MobileMenu.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  MobileMenu.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  MobileMenu.menus.add({
    title: 'mobileMenu',
    link: 'mobileMenuList',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    MobileMenu.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    MobileMenu.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    MobileMenu.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return MobileMenu;
});
