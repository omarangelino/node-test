var expect = require('expect');

var utils = require('./utils')

describe('Utils', () => {

	describe('#add' ,() => {
		it('should add two numbers',  () => {
		var res = utils.add(33, 11);
		expect(res).toBe(44).toBeA('number');
		// if(res !== 44 )
		// {
		// 	throw new Error(`Expected 44, but go ${res}` );
		// }
		});
	});
	

	it('should async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum)=> {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});
	it('should square a number', () => {
		var res = utils.square(3);
		expect(res).toBe(9).toBeA('number');
		// if(res !== 9)
		// {
		// 	throw new Error(`Expected 9, but got ${res}`);
		// }
	});

	it('should expect some value' , () => {
		// expect(12).toNotBe(12);
		expect({name: "Omar"}).toEqual({name: "Omar"});
	});

	it('Should incluid some value', () => {
		expect([2,3,4,5]).toInclude(5);
	})

	it('Should not incluid some value', () => {
		expect([2,3,4]).toExclude(5);
	});

	it('should verified first and last name are set', () =>{
		var res = utils.setName({ location: 'Canada', age: 29}, 'Omar Angelino');
		expect(res).toInclude({name: 'Omar', lastName: 'Angelino'});
	});

});


