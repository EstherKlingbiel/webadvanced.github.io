/*HERE IS WHAT I WANT TO DO:
	1. For each word, create a console animation like this:
				//38 on left side, 1 on right side
				'🌺🌺🌻💐🌻🌺🌻🌸💐🌹🌺🌻🌻🌹🌻🌺🌺🌺🌸🌺🌸🌺🌸🌸🌸💐💐🌻🌸🌻🌺🌻🌹🌸🌹💐🌺🌺 S 🌻',
				//37 on left side, 1 on right side
				'🌻🌻🌺🌸🌺💐💐🌻🌻🌺💐🌺🌻🌹🌸🌻🌻🌺🌹🌺🌻🌺🌻🌻🌻🌹🌻🌺🌻🌺💐🌹🌸🌻💐🌻🌸 E S 💐',
				//36 on left side, 1 on right side
				'🌻🌸🌹💐💐🌸🌺🌸💐💐🌸💐🌻💐🌺🌻🌻🌺🌸🌸🌺🌸💐🌹🌻💐💐🌹🌻🌸💐💐🌸🌻🌸🌺 S E S 🌹',
				//35 on left side, 1 on right side
				'🌸🌹💐🌺🌻🌻💐💐🌹💐🌻🌹🌹🌻🌹🌺💐🌸🌸🌸🌸🌺🌸🌻🌺🌹🌺💐🌻🌹🌺🌸🌺🌻🌻 S S E S 💐',
				//34 on left side, 1 on right side
				'💐🌻🌻🌺🌻🌺🌻🌹🌸🌸🌺🌸🌻🌺🌺🌻🌸🌹🌺🌺🌸🌻🌹🌻💐🌹🌸🌸🌹🌺🌺🌻💐💐 E S S E S 🌻',
				//33 on left side, 1 on right side
				'🌺🌻💐🌻🌺🌹🌸🌸💐🌹🌻🌸🌻🌺🌹🌺🌻💐💐🌻🌺🌻🌹🌺💐🌸🌻🌺🌸💐🌸🌸💐 N E S S E S 🌺',
				//31 on left side, 2 on right side
				'🌹💐🌹🌺🌺💐🌸🌸🌸🌺💐🌹🌺🌺🌻🌻🌺🌻🌹💐🌹🌺🌸💐🌸🌻🌻🌹🌻🌺🌺 S N E S S E S 🌻🌺',
				//29 on left side, 3 on right side
				'🌺🌹🌹🌸🌸🌹🌸🌹🌸🌻🌹🌻🌻💐🌸🌻💐🌺🌹🌸🌹💐🌸🌸🌹🌹🌻🌺🌻 U S N E S S E S 💐🌺🌻',
				//27 on left side, 4 on right side
				'🌹🌹💐💐🌸💐🌹🌺🌹🌺🌸🌸💐🌸🌺🌸🌺🌺🌻💐💐🌻🌻🌹🌸🌹🌸 O U S N E S S E S 🌻🌹🌻🌺',
				//25 on left side, 5 on right side
				'🌸🌻💐🌺💐🌸🌸💐🌸🌺🌹🌻💐💐💐🌺💐🌸🌺🌸🌺🌺🌻🌸🌻 R O U S N E S S E S 🌹🌺🌹💐🌺',
				//23 on left side, 6 on right side
				'🌸🌹💐🌸🌺💐💐🌻🌹💐🌻🌹🌻🌹🌹🌻💐🌺🌺💐🌻🌻💐 E R O U S N E S S E S 🌹🌺🌹🌹🌸💐',
				//21 on left side, 7 on right side
				'🌸🌺🌺💐🌹💐🌻🌺🌸🌺💐🌸🌻💐💐🌹💐🌻🌻🌹🌺 F E R O U S N E S S E S 🌹💐🌹💐🌹🌹💐',
				//19 on left side, 8 on right side
				'💐🌹🌸💐🌸🌻🌻🌻🌸🌻🌺💐💐🌹🌻🌸💐🌻🌺 I F E R O U S N E S S E S 💐🌻🌺🌺🌹🌸🌸🌹',
				//17 on left side, 9 on right side
				'🌺🌺🌻🌸💐🌺🌺🌻💐💐🌹🌻🌺🌻🌹🌸🌺 R I F E R O U S N E S S E S 🌺🌸🌻🌻🌺🌻🌻🌸🌺',
				//15 on left side, 10 on right side
				'💐🌺🌸🌸🌻🌸🌺🌸🌹🌺🌺💐🌹🌸💐 O R I F E R O U S N E S S E S 🌻🌹🌺🌸🌻💐🌻🌹💐💐',
				//13 on left side, 11 on right side
				'🌺🌹🌻🌻🌹💐🌸💐💐🌸🌺🌸🌸 L O R I F E R O U S N E S S E S 🌸🌸🌹💐🌺💐💐🌺🌺🌻🌸',
				//11 on left side, 12 on right side
				'🌹🌻🌺🌹🌺🌻🌸🌸🌻💐🌻 F L O R I F E R O U S N E S S E S 🌺🌸🌸💐💐🌻🌺💐🌹🌺🌸🌻'
		BUT instead of coding each string, somehow I need to make this happen on its own, using string split and shuffle array

	STEPS
	1. Recode the strings into two separate classes of arrays: one class for emojis, one class for the letters comprising the words.
		Example:
			var florifEmojis = [🌺🌻🌹🌸💐];
			var florifLetters = [FLORIFEROUSNESSES];

	2. Each line of the animation, depending on the word, has a set number of characters in the following formats:
			Emoji(s)-letter(s)-emoji(s);
			Letter(s)-emoji(s);
			Emoji(s)-letter(s);
		I need to figure out how to code this, so that, using the following above example, for the first three lines the 
		animation would happen like such:
			line 1: 38 emojis-1 letter (S)-1 emoji
			line 2: 37 emojis-2 letters (E, S)-1 emoji
			line 3: 36-emojis-3 letters (S, E, S)-1 emoji
				Problem 1: the emojis need to be randomized, but the letters cannot. That is why I have two separate arrays.
				Problem 2: The emojis do not degrade or build by 1 each time; sometimes they degrade/build by 2; 
				sometimes they do not change. I need to account for this in my code. Refer to above example for clarity. 

	3. Beyond this, I really have no clue where to even begin.
		-I know I have to shuffle the emoji array, but still give it instructions on how many (and where) emojis should be on 
		each line
		-I know I have to somehow add non-randomized letters into the middle or sides of my randomized emojis
		-I know I have to put all of this stuff in a for loop animation. I was playing with nesting for loops and was able 
		to call the two arrays side-by-side, but not randomize them or repeat the emojis on the line OR after they have completed 
		one loop (they return as undefined when their loop runs out, then for some reason i get five NaNs at the end of the loop). 
		The following is this half-finished loop. You can see what I'm talking about if you run it in the console.

		My biggest issue still remains to be the Javascript syntax. I can't find any examples online that show how I would code 
		or combine these steps. 

		I have been playing around with shuffling and string split but the issue is still syntax.
		
			var timer = 0;
			var counter = 0;

			var florifEmojis = ["🌺", "🌻", "🌹", "🌸", "💐"];
			var florifLetters = ["F", "L", "O", "R", "I", "F", "E", "R", "O", "U", "S", "N", "E", "S", "S", "E", "S"];

			var arrayLengthEmojis = florifEmojis.length;
			var arrayLengthLetters = florifLetters.length;

		
			for (var i = 0; i < arrayLengthEmojis; i++) {
				setTimeout(function () {
					for (var j = 0; j < arrayLengthLetters; j++) {
						console.log(florifEmojis[counter] +" "+ florifLetters[counter]);
						counter++;
					}
				}, timer);
				timer +=100;
			}*/


		
			

	





 
			






















