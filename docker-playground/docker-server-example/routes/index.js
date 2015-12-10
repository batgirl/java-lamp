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
  fs.writeFile('public/javascripts/sample.js', req.body.data, function (err) {
    if(err) throw err;
    console.log('wrote to file');
    exec('docker run --read-only --rm -v `pwd`/public/javascripts:/data:ro java-lamp/app-testing node sample.js',
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
