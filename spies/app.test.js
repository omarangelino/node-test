const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {

	var db = {
		saveUser: expect.createSpy()
	};

	app.__set__('db', db);

	it('Should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy('Omar', 29);
		expect(spy).toHaveBeenCalledWith('Omar', 29);
	});

	it('should call saveUser with the user object', () => {
		var email = 'omar.angelino@omar.com';
		var password = 'ad3123DASD';

		app.handleSignup(email , password);
		expect(db.saveUser).toHaveBeenCalledWith({email,password});
	});
});