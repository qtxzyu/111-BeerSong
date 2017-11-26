var BeerSong = require('./BeerSong.js');
var expectoutput = require('./expectoutput.js');
var expect = require('chai').expect;

describe('generate beersong test', function() {
	it('the initial num of bottle is 1', function() {
		expect(BeerSong(1)).to.be.equal("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 1 bottle of beer on the wall.")
	});
	it('the initial num of bottle is 2', function() {
		expect(BeerSong(2)).to.be.equal("2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 2 bottles of beer on the wall.")
	});
	
	it('the initial num of bottle is 3', function() {
		expect(BeerSong(3)).to.be.equal("3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 3 bottles of beer on the wall.")
	});	
	it('the initial num of bottle is 99', function() {
		let expectedOutput = expectoutput();
		expect(BeerSong(99)).to.be.equal(expectedOutput);
	});
});
