var express = require('express');
var router = express.Router();

// /GET for register
router.get('/register', function(req,res,next) {
	return res.render('register', {title: 'Sign Up'});
});
//route for index
router.get('/', function(req,res,next) {
	return res.render('index', { title: 'Home'});
});

module.exports = router;
