var express = require('express');
var router = express.Router();

var Promise = require('promise');

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
  var randomFileName = new Promise(function (resolve, reject) {
    resolve(randomString(Math.floor(Math.random() * (24 - 4 + 1)) + 4));
  })

  randomFileName.then(function (response) {
    console.log(response);
  })

  fs.writeFile('public/javascripts/sample.js', 'console.log(('+req.body.data+')())', function (err) {
    if(err) throw err;
    console.log('wrote to file');
    exec('docker run --read-only --rm -v `pwd`/public/javascripts:/data:ro   sample.js',
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
        if(!stderr){
          res.send(stdout);
        }else{
          res.send(stderr);
        }
    });
  })
});

module.exports = router;
