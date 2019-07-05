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

var Blah = {
    "What we've got here is failure to communicate. ": {
        "The Shawshank Redemption": 0,
        "Cool Hand Luke": 1,
        "Top Gun": 0,
        "Butch Cassidy and the Sundance Kid": 0
    },

    "Movies don't create psychos. Movies make psychos more creative! ": {
        "American Psycho": 0,
        "Haloween H20": 0,
        "Psycho": 0,
        "Scream": 1
    },

    "That rug really tied the room together. ": {
        "Fight Club": 0,
        "Pulp Fiction": 0,
        "The Big Lebowski": 1,
        "Fargo": 0
    },

    "I have been touched by your kids...and I'm pretty sure that I've touched them. ": {
        "School of Rock": 1,
        "Kindergarten Cop": 0,
        "Twins": 0,
        "Bad Teacher": 0
    },

    "You are a sad, strange little man and you have my pity. ": {
        "The Incredibles": 0,
        "Up": 0,
        "Toy Story": 1,
        "Megamind": 0
    },

    "I am serious... and don't call me Shirley. ": {
        "Monty Python": 0,
        "Hot Shots Part Deux": 0,
        "Naked Gun": 0,
        "Airplane!": 1
    },

    "I never had any friends later on like the ones I had when I was 12, Jesus, does anyone? ": {
        "Dazed and Confused": 0,
        "Stand By Me": 1,
        "The Sandlot ": 0,
        "The Mighty Ducks": 0
    },

    "Mess with the bull young man you'll get the horns. ": {
        "Pretty in Pink": 0,
        "Sixteen Candles": 0,
        "Breakfast Club": 0,
        "Say Anything": 1
    },

    "We don't need no stinking badges! ": {
        "Casablanca": 0,
        "Dirty Harry": 0,
        "Treasure of the Sierra Madre": 1,
        "The Good the Bad and the Ugly": 0
    },

    "I love the smell of napalm in the morning. ": {
        "Platoon": 0,
        "Saving Private Ryan": 0,
        "Full-Metal Jacket": 0,
        "Apocalypse Now": 1
    }

}
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

//----- function to add questions to page-------//
var addQuestionsToPage(obj) = {
    
}


//-------------funtion to start Old Movie countdown timer 5 seconds------------//

$("#startBTN").click(function () {
    //remove start screen and add countdown gif image
    $(".startScreen").remove();
    $("#startGameScreen").append('<img src="assets/images/5SecCountdown.gif">');

    setTimeout(fiveSeconds, 1000 * 5);
    function fiveSeconds() {
        //remove countdown GIF
        $("#startGameScreen").remove();
    }
    //call function that appends questions by looping through objects and adding each one to the screen//
    addQuestionsToPage();
});

//----function that starts and displays



// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(timeUp, 1000 * 15);