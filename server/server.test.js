const request = require('supertest');
var expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {

	describe('Get /', () => {
		it('Should return hello world response', (done) => {

			request(app)
			.get('/')
			.expect(200)
			.expect('Hello World!')
			.end(done);
		});
	});

	describe('Get /users', () => {
		it('should return my user Object', (done) => {
			request(app)
			.get('/users')
			.expect(200)
			.expect( (res) => {
				expect(res.body).toInclude({
					name: 'Omar',
					age: 29
				});
			})
			.end(done);
		});
	});
	

// it('Should return error response', (done) => {

// 	request(app)
// 	.get('/')
// 	.expect(400)
// 	.expect({error: 'Page not found.'})
// 	.end(done);
// });


});
