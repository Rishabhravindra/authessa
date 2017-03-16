function requiresLogin(req,res,next) {
	if(req.session && req.session.userId) {
		return next();
		
	}
	var err = new Error("Please login to view profile");
		err.status = 401;
		return next(err);
}

function loggedOut(req,res,next) {
	if( req.session && req.session.userId) {
		return res.redirect('/profile');
	}
	return next();
}
module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;