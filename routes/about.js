var express = require('express');
var router = express.Router();

/* GET about page */
router.get('/', function(req, res, next) {
  res.send('Treco was established in 2018 by Ali Kinay, Riley Danger Hanson, and Atilla T. Sogut');
});//spacing important for this to work. Don't forget to save to all files
	
module.exports = router;
