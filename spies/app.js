var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
	//Check if email already exist
	//Save the user to the Datebase
	db.saveUser({email,password});
	//Send The welcome email
	
};