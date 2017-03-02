var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var index = fs.readFile('./public/index.html');
var httpHelpers = require('./http-helpers');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  
  if (req.method === 'GET') {

  }
  if (req.method === 'POST') {
    //check the data on the post
      //extract the url
    //use archive.isUrlInList to check and see if the URL is already written in our sites.txt
    // if it's n
    //check to see if its in the archive as well
  }
  res.end(archive.paths.list);
};
