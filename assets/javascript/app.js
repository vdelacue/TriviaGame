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
    "1": {
        quote: "What we've got here is failure to communicate. ",
        answerA: "The Shawshank Redemption",
        answerB: "Cool Hand Luke",
        answerC: "Top Gun",
        answerD: "Butch Cassidy and the Sundance Kid"
    },

    "2": {
        quote: "Movies don't create psychos. Movies make psychos more creative! ",
        answerA: "American Psycho",
        answerB: "Haloween H20",
        answerC: "Psycho",
        answerD: "Scream"
    },

    "3": {
        quote: "That rug really tied the room together. ",
        answerA: "Fight Club",
        answerB: "Pulp Fiction",
        answerC: "The Big Lebowski",
        answerD: "Fargo"
    },

    "4": {
        quote: "I have been touched by your kids...and I'm pretty sure that I've touched them. ",
        answerA: "School of Rock",
        answerB: "Kindergarten Cop",
        answerC: "Twins",
        answerD: "Bad Teacher"
    },

    "5": {
        quote: "You are a sad, strange little man and you have my pity. ",
        answerA: "The Incredibles",
        answerB: "Up",
        answerC: "Toy Story",
        answerD: "Megamind"
    },

    "6": {
        quote: "I am serious... and don't call me Shirley. ",
        answerA: "Monty Python",
        answerB: "Hot Shots Part Deux",
        answerC: "Naked Gun",
        answerD: "Airplane!"
    },

    "7": {
        quote: "I never had any friends later on like the ones I had when I was 12, Jesus, does anyone? ",
        answerA: "Dazed and Confused",
        answerB: "Stand By Me",
        answerC: "The Sandlot ",
        answerD: "The Mighty Ducks"
    },

    "8": {quote: "Mess with the bull young man you'll get the horns. ",
        answerA: "Pretty in Pink",
        answerB: "Sixteen Candles",
        answerC: "Breakfast Club",
        answerD: "Say Anything"
    },

    "9": {
        quote: "We don't need no stinking badges! ",
        answerA: "Casablanca",
        answerB: "Dirty Harry",
        answerC: "Treasure of the Sierra Madre",
        answerD: "The Good the Bad and the Ugly"
    },

    "10": {
        quote: "I love the smell of napalm in the morning. ",
        answerA: "Platoon",
        answerB: "Saving Private Ryan",
        answerC: "Full-Metal Jacket",
        answerD: "Apocalypse Now"
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