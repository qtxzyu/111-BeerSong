function generateLastTwoLine(num) {
	let bottlenum = getBottleNum(num);
	return "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, " + bottlenum + " of beer on the wall."
}
function getBottleNum(num) {
	let bottlenum;
	if (num === 1) {
		bottlenum = "1 bottle";
	} else if (num > 1) {
		bottlenum = num + " " + "bottles";
	}
	return bottlenum;
}
function generateFrontLine(num) {
	let result = '';
	for (let i = num; i > 1;) {
		result += getBottleNum(i) + " of beer on the wall, " + getBottleNum(i) + " of beer.\nTake one down and pass it around, "  + getBottleNum(--i) + " of beer on the wall.\n";
	}
	return result;
}
function BeerSong(num) {
	let lastTwoLine = generateLastTwoLine(num);
	let frontLine = generateFrontLine(num);
	//console.log(frontLine+lastTwoLine)
	return frontLine + lastTwoLine;
}
function print(output) {
	console.log(output);
}
function main() {
	let num = 99;
	let output = BeerSong(num);
	print(output);
}

module.exports = BeerSong;