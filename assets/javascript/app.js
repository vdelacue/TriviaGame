// * You'll create a trivia form with multiple choice or true/false options (your choice).

//* The player will have a limited amount of time to finish the quiz. 

//* The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

//* Don't let the player pick more than one answer per question.

//* Don't forget to include a countdown timer.

//page starts with a display asking player to click button to start timed game
// when button is clicked page with questions and choices is loaded
//counter will start and displayed to player
// player can select one answer per question
// we can assign each answer to a question a value correct answers are worth 1pt and wrong answers are 0
//after time is up all answers are added and displayed 

//we can create an object of the questions with each question as its own object with choices that are assigned numerical values

//create game Object with questions//

var Blah = [
    "What we've got here is failure to communicate. " {
        "The Shawshank Redemption" : 0,
        "Cool Hand Luke" : 1,
        "Top Gun" : 0,
        "" : 0
    },

    "Movies don't create psychos. Movies make psychos more creative! " {
        "" : 0,
        "" : 0,
        "" : 0,
        "" : 1
    },

    "That rug really tied the room together. " {
        "" : 0,
        "" : 0,
        "" : 0,
        "" : 1
    },

    "I have been touched by your kids...and I'm pretty sure that I've touched them. " {
        "" : 0,
        "" : 0,
        "" : 0,
        "" : 1
    },

    "You are a sad, strange little man and you have my pity. " {
        "" : 0,
        "" : 0,
        "" : 0,
        "" : 1
    },

    " " {
        "" : 0,
        "" : 0,
        "" : 0,
        "" : 1
    },

    " " {
        "" : 0,
        "" : 0,
        "" : 0,
        "" : 1
    },

    " " {
        "" : 0,
        "" : 0,
        "" : 0,
        "" : 1
    },

    " " {
        "" : 0,
        "" : 0,
        "" : 0,
        "" : 1
    },

    " " {
        "" : 0,
        "" : 0,
        "" : 0,
        "" : 1
    }

]
//----------Global Variables---------//

// count correct answers from player
var correctCount = 0;

//count wrong answers from player
var wrongCount = 0;

//player answer selection
var playerSelection = 0;

//correct answer
var correctSelection = 1;

var score = 0;

var gameOver = false;


