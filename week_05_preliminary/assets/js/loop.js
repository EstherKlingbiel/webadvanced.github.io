//(emojiarray[0] - x) + (letters) + (emojiarry[x] - end)
//i want 
	//(emojiarray[i] + 1) + (1 - first half of word[i]) + (second half of word - 1) + (emojiarray + 1): for the first half of "Anthropocentricities"

//declare variables for "Anthropocentricities"
var emojiArrayLeft = ["👶🏻", "👵🏼", "👵🏼", "👴🏻", "👶🏻", "👨🏾", "👴🏻", "👦🏼", "👨🏾", "👵🏼 "];//var length = 10

var lettersLeft = ["A", "N", "T", "H", "R", "O", "P", "O", "C", "E"];//var length = 10

var lettersRight = ["N", "T", "R", "I", "C", "I", "T", "I", "E", "S "];//var length = 10

var emojiArrayRight =  ["👵🏼", "👨🏾", "👩🏿","👵🏼", "👴🏻", "👦🏼", "👴🏻", "👦🏼", "👵🏼", "👦🏼"];//var length = 20

//to instruct letters/emojis to grow/shrink
//make emojis on the left shrink
var emojiArrayLeftGrow = false;
//make FIRST letter of lettersLeft shrink
var lettersLeftGrow = false;
//make LAST letter of lettersRight shrink
var lettersRightGrow = false;
//make emojis on the right shrink
var emojiArrayRightGrow = false;

//join the array items into a string with .join
//join section one
var sectionOneCombine = emojiArrayLeft.join('');
//join section two
var sectionTwoCombine = lettersLeft.join('');
//join section three 
var sectionThreeCombine = lettersRight.join('');
//join section four
var sectionFourCombine = emojiArrayRight.join('');

//check the console to make sure it's working. comment out later.
console.log(sectionOneCombine + sectionTwoCombine + sectionThreeCombine + sectionFourCombine);

//declare variables for loop
var sectionOne = "";
var sectionTwo = "";
var sectionThree = "";
var sectionFour = "";

//put vars in for loop
for (var i = emojiArrayLeft.length + 1; i >= 0; i--) {
//to do: first section of emojis
	//take the first section of the emoji array and subtract current element [i] from the emoji array
	sectionOne = emojiArrayLeft;
	sectionOne[i] = "";

	//convert array into string
	var stringOfSectionOne = sectionOne;

	if (emojiArrayLeftGrow) {
		//if true, start with all emojis and subtract:
		sectionOne = emojiArrayLeft;
		sectionOne[i] = " ";
		var stringOfSectionOne = sectionOne;
	} else {
		//if false, add letters
		sectionOne += emojiArrayLeft[i];
		var stringOfSectionOne = sectionOne;
	}

//to do: first section of letters
	//take the first section of the letter array and subtract the first letter [i] from the emoji array. HOW DO I DO THIS?
	sectionTwo = lettersLeft;
	sectionTwo[i] = "";

	//convert array into string
	var stringOfSectionTwo = sectionTwo;

	if (lettersLeftGrow) {
		//if true, start with all letters and subtract:
		sectionTwo = lettersLeft;
		sectionTwo[i] = " ";
		var stringOfSectionTwo = sectionTwo;
	} else {
		//if false, add letters
		sectionTwo += lettersLeft[i];
		var stringOfSectionTwo = sectionTwo;
	}

//to do: second section of letters
	//take the last section of the letters array and subtract the last letter from the emoji array. 
	sectionThree = lettersRight;
	sectionThree[i] = "";

	//convert array into string
	var stringOfSectionThree = sectionThree;

	if(lettersRightGrow) {
		//if true, start with all letters and subtract:
		sectionThree = lettersRight;
		sectionThree[i] = "";
		var stringOfSectionThree = sectionThree
	} else {
		//if false, add letters
		sectionThree += lettersRight[i];
		var stringOfSectionThree = sectionThree;
	}

//to do: last section of emojis
	//take the last section of the emoji array and subtract [i]
	sectionFour = emojiArrayRight;
	sectionFour[i] = "";

	//convert array into string
	var stringOfSectionFour = sectionFour;

	if (emojiArrayRightGrow) {
		//if true, start with all letters and subtract:
		sectionFour = emojiArrayRight;
		sectionFour[i] = "";
		var stringOfSectionFour = sectionFour;
	} else {
		//if false, add letters
		sectionFour += emojiArrayRight[i];
		var stringOfSectionFour = sectionFour;
	}




		//log to console
	console.log(stringOfSectionOne + stringOfSectionTwo + stringOfSectionThree + stringOfSectionFour);
}//end emojiArrayLeft for loop


var timer = 0;
var counter = 0;

for (var i = 0; i < emojiArrayLeft.length; i++) {
	setTimeout(function () {
		console.log(emojiArrayLeft + lettersLeft + lettersRight + emojiArrayRight);
		counter++
	}, timer);
	timer += 100
}











































