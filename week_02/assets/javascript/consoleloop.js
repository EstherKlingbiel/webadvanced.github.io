var allWords = ['Anthropocentricities', 'Archaeoastronomies', 'Atrabiliousnesses', 'Bloodguiltinesses', 'Bloodthirstinesses', 'Buckminsterfullerene', 'Cantankerousnesses', 'Crashworthinesses', 'Crystallographically', 'Demythologization', 'Denominationalisms', 'Departmentalizations', 'Evapotranspiration', 'Everlastingnesses', 'Extemporaneousnesses', 'Feeblemindednesses', 'Floriferousnesses', 'Forethoughtfulnesses' ]

console.log();
for (var i = 0; i < allWords.length; i++) {
	if (allWords[i].length / 4 === 5) {

		console.log(allWords[i]);

	} 
} 

console.log(' ');
for (var i = 0; i < allWords.length; i++) {
	if (allWords[i].length / 3 === 6) {
		
		console.log(allWords[i]);
	}
}

console.log(' ');
for (var i = 0; i < allWords.length; i++) {
	if (allWords[i].length % 2 !== 0) {

		console.log(allWords[i]);
	}
}

console.log(' ');
console.log('What pattern/patterns do you notice?');