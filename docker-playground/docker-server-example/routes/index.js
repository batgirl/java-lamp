var express = require('express');
var router = express.Router();

var fs = require('fs');
var exec = require('child_process').exec,
    child;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/docker', function(req, res, next) {
  child = exec('docker run --read-only --rm -v `pwd`/public/javascripts:/data:ro java-lamp/app-testing node sample.js',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
      res.send(stdout);
  });
});

module.exports = router;
