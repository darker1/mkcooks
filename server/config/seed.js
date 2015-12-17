/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
module.exports = function(callback)
{
  var Thing = require('../api/thing/thing.model');
  var User = require('../api/user/user.model');
  var Meal = require('../api/meal/meal.model');
  var Ingredient = require('../api/ingredient/ingredient.model');

  Thing.find({}).remove(function() {
    Thing.create({
      name : 'Development Tools',
      info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
      name : 'Server and Client integration',
      info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
      name : 'Smart Build System',
      info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    },  {
      name : 'Modular Structure',
      info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
    },  {
      name : 'Optimized Build',
      info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    },{
      name : 'Deployment Ready',
      info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
  });

  User.find({}).remove(function() {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function() {
        console.log('finished populating users');
      }
    );
  });

  Meal.find({}).remove(function() {
    Meal.create({
        name: 'Super Tastey Chicken',
        description: 'This is some fucking good chicken. Really, its fried, I mean... whats better than that?!?',
        markdown: 'Super Tastey Chicken \r\n' +
              '================= \r\n' +
              'The Stuff in it  \n  \n' +
              '* Chicken (DUH)  \n' +
              '* Rice  \n' +
              '* and other stuff too  \n  \n' + 
              '![picture](http://www.browneyedbaker.com/wp-content/uploads/2013/05/buttermilk-fried-chicken-23-600.jpg)  \n' +
              '## How We Make It  \n' +
              'Here is a block of text about how we make things... and stuff... and things.   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        thumbnail: 'http://www.browneyedbaker.com/wp-content/uploads/2013/05/buttermilk-fried-chicken-23-250-135x135.jpg',
        datePosted: '2014-12-17T03:24:00',
        serves: 2,
        author: 'Meagan Karagias',
        ingredients : [{ingredient:'Chicken', amount:'1 whole'},
                       {ingredient:'Rice', amount:'1 cup'},
                       {ingredient:'Butter', amount:'1 stick'}],      
        active: true 
    }, {
        name: 'Premium Pasta',
        description: 'This is some Premium Pasta. Nuff Said!',
        markdown: 'Premium Pasta \r\n' +
              '================= \r\n' +
              'The Stuff in it  \n  \n' +
              '* Pasta  \n' +
              '* Sauce  \n' +
              '* A few other things...   \n  \n' + 
              '![picture](http://majestichouston.com/wp-content/uploads/2015/05/pasta-1.jpg)  \n' +
              '## How We Make It  \n' +
              'Here is a block of text about how we make things... and stuff... and things.   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        thumbnail: 'http://majestichouston.com/wp-content/uploads/2015/05/pasta-1.jpg',
        datePosted: '2014-12-13T03:24:00',
        serves: 3,
        author: 'Kyle Wall',   
        ingredients : [{ingredient:'Pasta', amount:'2 cups'},
                       {ingredient:'Chorizo', amount:'1 cup'},
                       {ingredient:'Butter', amount:'1 stick'}],      
        active: true 
    },{
        name: 'Premium Pasta 2',
        description: 'This is some Premium Pasta. Nuff Said!',
        markdown: 'Premium Pasta \r\n' +
              '================= \r\n' +
              'The Stuff in it  \n  \n' +
              '* Pasta  \n' +
              '* Sauce  \n' +
              '* A few other things...   \n  \n' + 
              '![picture](http://majestichouston.com/wp-content/uploads/2015/05/pasta-1.jpg)  \n' +
              '## How We Make It  \n' +
              'Here is a block of text about how we make things... and stuff... and things.   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        thumbnail: 'http://majestichouston.com/wp-content/uploads/2015/05/pasta-1.jpg',
        datePosted: '2014-12-13T03:24:00',
        serves: 3,
        author: 'Kyle Wall',    
        active: false 
    }, function(){
      console.log('finished populating meals.');
    });
  });


  Ingredient.find({}).remove(function() {
    Ingredient.create(
      {name: 'Pasta', active: true},
      {name: 'Chorizo', active: true},
      {name: 'Butter', active: true},
      {name: 'Chicken', active: true},
      {name: 'Rice', active: true},
      function(){ 
        console.log('finished populating ingredients.');
        callback();
      });
  });

}