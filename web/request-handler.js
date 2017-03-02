var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelpers = require('./http-helpers');


// require more modules/folders here!

//function works, filepath will need adjustment [ ]
exports.handleRequest = function (req, res) {
  console.log();
  if (req.method === 'GET') {
    res.writeHead(200, httpHelpers.headers);
    //fs.readFile(__dirname + '/public/index.html', (err, data) => {
    // get reqUrl 
    // if reqUrl is homepage url
    //'/Users/student/Desktop/hrsf73-web-historian/web/public/index.html'
    // console.log('***********request url *************', req.url);
    if (req.url === '/') {
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
      
      // fs.readFile('/Users/student/Desktop/hrsf73-web-historian/test/testdata/sites' + req.url, (err, data) => {
      //   if (err) {
      //     throw err;
      //   } else {
      //     res.end(data.toString());
      //   }
      // });
    
    fs.readdir('/Users/student/Desktop/hrsf73-web-historian/test/testdata/sites', (err, files) => {
      console.log('#####files#### :', files);
      console.log('$$$$$$$$$request.url$$$$$$ : ',req.url);
      if (err) {
        throw err;
      } else {
        debugger;
        files.forEach(file => {
          console.log('@@@@@@@file@@@@@ : ', file);
          if (file === req.url) {
            fs.readFile('/Users/student/Desktop/hrsf73-web-historian/test/testdata/sites/' + file, (err, data) => {
              if (err) {
                throw err;
              } else {
                res.end(data.toString());
              }
            });
          }
        });
      }
    });
    }
    //need to know:
      //how to get the url from the searchbar if they type it in there
   

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
