var fs = require('fs');
var path = require('path');
var _ = require('underscore');

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
    console.log('##### data from readListOfUrls ##### : ', data.toString());
  });
};

exports.isUrlInList = function(url, callback) { //service?
  // read file
  // search through the file to see if it includes the Url
  // if yes
    // then cb(url)
  // if not
    // return false
  
};

exports.addUrlToList = function(url, callback) { //service?
};

exports.isUrlArchived = function(url, callback) { //both?
};

exports.downloadUrls = function(urls) { //worker?
};
