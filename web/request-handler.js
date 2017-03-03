var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelpers = require('./http-helpers');


// require more modules/folders here!

//function works, filepath will need adjustment [ ]
exports.handleRequest = function (req, res) {
  console.log();
  if (req.method === 'GET') {
  
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
      console.log(req.url.slice(1));
      fs.readFile(archive.paths.archivedSites + req.url + '.htm', (err, data) => {
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
      //need to check if the url (from body) is in the sites.txt.
      archive.isUrlInList(body, function(found) {
        //if yes, check to see if the url is stored in the archive.
        if (found) {
          archive.isUrlArchived(body, function(exists) {
            if (exists) {

            }
          });
        }
      });
          //if yes, show the site.
          //if no, show the loading page.
        //if no (the url is not in sites.txt) then append the url to sites.txt && show the loading page.
      fs.appendFile(archive.paths.list, body.slice(4) + '\n', (err) => {
        if (err) {
          throw err;
        }
      });
      res.end();
    });

  }
  
};
