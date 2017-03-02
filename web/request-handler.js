var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelpers = require('./http-helpers');


// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log();
  if (req.method === 'GET') {
    res.writeHead(200, httpHelpers.headers);
    //fs.readFile(__dirname + '/public/index.html', (err, data) => {
    fs.readFile('/Users/student/Desktop/hrsf73-web-historian/web/public/index.html', (err, data) => {
      if (err) {
        throw err;
      } else {
        res.end(data.toString());
      }
    });
   

  }
  if (req.method === 'POST') {
    res.writeHead(200, httpHelpers.headers);
    var body = [];
    req.on('data', function(chunk) {
      body.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(body).toString();
    });
    //check the data on the post
      //extract the url
    console.log(body);
    res.end();
      //archive.isUrlInList(url, archive.isUrlArchived)
    //use archive.isUrlInList to check and see if the URL is already written in our sites.txt
    // if it's n
    //check to see if its in the archive as well
  }
  
};
