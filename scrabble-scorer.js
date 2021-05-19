// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
      
      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }
	  }
	}
	return letterPoints;
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word = "";
function initialPrompt() {
  word = input.question("Let's play some scrabble! Enter a word: ");
  word = word.toLowerCase();
  //let test = scorerPrompt();
  //console.log(test.scorerFunction(word));
  //console.log(chosenAlgorithm(word));
  //return word.toUpperCase();
};

function simpleScore(word){
  return word.length;
};

function vowelBonusScore(word){
	word = word.toUpperCase();
  let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
    if (oldPointStructure[1].includes(word[i]) && oldPointStructure[1].indexOf(word[i]) < 5) {
      letterPoints += 3;
    } else { 
      letterPoints++ 
      }
	  }
	
	return letterPoints;
};

function scrabbleScore(word){
  word = word.toLowerCase();
  let letterPoints = 0;
  transform();
  for (let i = 0; i < word.length; i++){
    letterPoints += Number(newPointStructure[word[i]]);
  }
  return letterPoints;
};

let scoringAlgorithms = [
  object0 = {
    name: "Simple Score",
    description: "Each letter is worth 1 point",
    scorerFunction: simpleScore
  },
  object1 = {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scorerFunction: vowelBonusScore
  },
  object2 = {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scorerFunction: scrabbleScore
  }];


function scorerPrompt() {
  let index;
  index = input.question(`Which scoring algorithm would you like to use?
  
0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2: `);

  let chosenAlgorithm = scoringAlgorithms[index];
  console.log(`Score for '${word}': ${chosenAlgorithm.scorerFunction(word)}`);
  return chosenAlgorithm;
}

function transform(anObject = oldPointStructure) {
  let newPointStructure = {};
  for (let key in oldPointStructure) {
    for (let j = 0; j < oldPointStructure[key].length; j++){
      let newKey = oldPointStructure[key][j].toLowerCase();
      newPointStructure[newKey] = key;
    }
  }
  return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   console.clear();
   initialPrompt();
   scorerPrompt();
   
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

