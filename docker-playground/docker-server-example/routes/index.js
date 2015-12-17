var express = require('express');
var router = express.Router();

var Promise = require('promise');
var execPromise = require('child-process-promise').exec;

var fs = require('fs');
var exec = require('child_process').exec,
    child;


var randomString = function(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/docker', function(req, res, next) {
  var randomDirName = new Promise(function (resolve, reject) {
    resolve(randomString(Math.floor(Math.random() * (12 - 2 + 1)) + 2));
  });

  randomDirName.then(function (dirResponse) {
    return execPromise('mkdir public/javascripts/' + String(dirResponse))
      .then(function (response) {
        return execPromise('touch public/javascripts/' + String(dirResponse) + '/sample.js')
          .then(function (response) {
            return dirResponse;
          })
      })
  })
  .then(function (dirResponse) {
    fs.writeFile('public/javascripts/' + String(dirResponse) + '/sample.js', 'console.log(('+req.body.data+')())', function (err) {
      if(err) throw err;
      console.log('wrote to file');
      execPromise('docker run --read-only --rm -v `pwd`/public/javascripts/' + String(dirResponse) + '/:/data:ro java-lamp/app-testing node sample.js')
        .then(function (response) {
          if (response.stderr != '') {
            res.send(response.stderr);
          } else {
            res.send(response.stdout);
          }
          return response;
        })
        .then(function (response) {
          execPromise('rm -rf public/javascripts/' + String(dirResponse))
        });
    });
  });
});

module.exports = router;
