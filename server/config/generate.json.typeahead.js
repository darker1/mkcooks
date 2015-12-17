'Use Strict'

var Ingredient = require('../api/ingredient/ingredient.model');
var fs = require('fs');

Ingredient.find({'active': true}).select({'name' : 1, '_id' : 0}).exec(function (err, ingredients) {
	console.log(ingredients);
    if(err) { return handleError(res, err); }
    fs.open('./client/assets/json/ingredients.json',
    	'w',
    	function(err, fd){
    		if(err){
    			console.log('Error opening file');
    			throw err;
    		}

    		fs.write(fd, JSON.stringify(ingredients), function(err){
  				if(err){
    				console.log('Error writing file');
    				throw err;
    			}   			
    			fs.close(fd, function(){
    				console.log('ingredients.json successfully written.');
    			});
    		});
    	});
  	
  });
