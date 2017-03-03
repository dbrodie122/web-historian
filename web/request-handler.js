var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelpers = require('./http-helpers');


// require more modules/folders here!

//function works, filepath will need adjustment [ ]
exports.handleRequest = function (req, res) {
  console.log();
  if (req.method === 'GET') {
    
    //fs.readFile(__dirname + '/public/index.html', (err, data) => {
    // get reqUrl 
    // if reqUrl is homepage url
    //'/Users/student/Desktop/hrsf73-web-historian/web/public/index.html'
    // console.log('***********request url *************', req.url);
    if (req.url === '/') {
      res.writeHead(200, httpHelpers.headers);
      fs.readFile('/' + __dirname + '/public/index.html', (err, data) => {
        if (err) {
          throw err;
        } else {
          res.end(data.toString());
        }
      });
    } else {
      // console.log('***********request url *************', req.url);
      // console.log('!!!!!!!!!!!!!!directory: ', __dirname);
      
      fs.readFile(archive.paths.archivedSites + '/' + req.url, (err, data) => {
        if (err) {
          res.writeHead(404, httpHelpers.headers);
          res.end();
        } else {
          res.writeHead(200, httpHelpers.headers);
          res.end(data.toString());
        }
      });
    }

   

  }
  if (req.method === 'POST') {
    res.writeHead(302, httpHelpers.headers);
    var body = [];
    req.on('data', function(chunk) {
      body.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(body).toString();
      fs.appendFile(archive.paths.list, body.slice(4) + '\n', (err) => {
        if (err) {
          throw err;
        }
      });
      res.end();
    });
    //check the data on the post
      //extract the url
      
    //fs.appendFile('sites.txt', );
    
      //archive.isUrlInList(url, archive.isUrlArchived)
    //use archive.isUrlInList to check and see if the URL is already written in our sites.txt
    // if it's n
    //check to see if its in the archive as well
  }
  
};
