var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) { //worker?
  fs.readFile(exports.paths.list, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data.toString().split('\n'));
    }
  });
};

exports.isUrlInList = function(url, callback) { //service?
  fs.readFile(exports.paths.list, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(_.contains(data.toString().split('\n'), url));
    }
  }); 
};

exports.addUrlToList = function(url, callback) { //service?
  fs.appendFile(exports.paths.list, url, err => {
    if (err) {
      throw err;
    } else {
      callback(url);
    }
  });
};

exports.isUrlArchived = function(url, callback) { //both?
  fs.readdir(exports.paths.archivedSites, (err, files) => {
    if (err) {
      throw err;
    } else {
      callback(_.contains(files, url));
    }
  }); 
};

exports.downloadUrls = function(urls) { //worker?
  //REMEMBER!
    //WE WERE TRYING TO FIGURE OUT HOW TO USE REQUEST AND I COULDNT GET IT TO CONSOLE LOG ANYTHING
  //console.log('+++++++++++++urls +++++++: ', url.parse(urls[0]));
  // urls.forEach(url => {
  //   console.log("=======using request.get======", request.get(url));
  // });
};

// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

//request module
//readfile from external site
