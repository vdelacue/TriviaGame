// * You'll create a trivia form with multiple choice or true/false options (your choice).

//* The player will have a limited amount of time to finish the quiz. 

//* The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

//* Don't let the player pick more than one c per question.

//* Don't forget to include a countdown timer.

//page starts with a display asking player to click button to start timed game
// when button is clicked content will be removed 
//a GIF of old movie countdown will appear for 5 seconds then a function that will load a page of questions and choices will be appended with jQuery.
//counter will start and displayed to player on top right
// player can select one choice per question
// we can assign each choice to a question a value correct choices are worth 1pt and wrong cs are 0 // or we can creat an object of the answers that pairs questions with answers (key & value)
//after time is up all choicess are searched for in array of correct answers or checked to see if they match the answerKEy)
//we can create an object of the questions with each question as its own object with choices that are assigned numerical values

//create game Object with questions & an answer key //

var movieQuotes = {
    "1": {
        quote: "What we've got here is failure to communicate. ",
        cA: "The Shawshank Redemption",
        cB: "Cool Hand Luke",
        cC: "Top Gun",
        cD: "Butch Cassidy and the Sundance Kid"
    },

    "2": {
        quote: "Movies don't create psychos. Movies make psychos more creative! ",
        cA: "American Psycho",
        cB: "Haloween H20",
        cC: "Psycho",
        cD: "Scream"
    },

    "3": {
        quote: "That rug really tied the room together. ",
        cA: "Fight Club",
        cB: "Pulp Fiction",
        cC: "The Big Lebowski",
        cD: "Fargo"
    },

    "4": {
        quote: "I have been touched by your kids...and I'm pretty sure that I've touched them. ",
        cA: "School of Rock",
        cB: "Kindergarten Cop",
        cC: "Twins",
        cD: "Bad Teacher"
    },

    "5": {
        quote: "You are a sad, strange little man and you have my pity. ",
        cA: "The Incredibles",
        cB: "Up",
        cC: "Toy Story",
        cD: "Megamind"
    },

    "6": {
        quote: "I am serious... and don't call me Shirley. ",
        cA: "Monty Python",
        cB: "Hot Shots Part Deux",
        cC: "Naked Gun",
        cD: "Airplane!"
    },

    "7": {
        quote: "I never had any friends later on like the ones I had when I was 12, Jesus, does anyone? ",
        cA: "Dazed and Confused",
        cB: "Stand By Me",
        cC: "The Sandlot ",
        cD: "The Mighty Ducks"
    },

    "8": {
        quote: "Mess with the bull young man you'll get the horns. ",
        cA: "Pretty in Pink",
        cB: "Sixteen Candles",
        cC: "Breakfast Club",
        cD: "Say Anything"
    },

    "9": {
        quote: "We don't need no stinking badges! ",
        cA: "Casablanca",
        cB: "Dirty Harry",
        cC: "Treasure of the Sierra Madre",
        cD: "The Good the Bad and the Ugly"
    },

    "10": {
        quote: "I love the smell of napalm in the morning. ",
        cA: "Platoon",
        cB: "Saving Private Ryan",
        cC: "Full-Metal Jacket",
        cD: "Apocalypse Now"
    },

    "cKey": {
        1: "cB",
        2: "cD",
        3: "cC",
        4: "cA",
        5: "cC",
        6: "cD",
        7: "cB",
        8: "cC",
        9: "cC",
        10: "cD"
    }

}
//----------Global Variables---------//

//array of correct cs
var correctcs = ["Cool Hand Luke", "Scream", "The Big Lebowski", "School of Rock", "Toy Story", "Airplane!", "Stand By Me", "Breakfast Club", "Treasure of the Sierra Madre", "Apocalypse Now"];

// count correct cs from player
var correctCount = 0;

//player c selection
var playerSelection = 0;

//correct c
var correctSelection = 1;

var score = 0;

var gameOver = false;


//----- function to add questions to page-------//

var addQuestionsToPage = function (movieQuotes) {
    var label = $("<label>");
    console.log(label);
    var brk = $("<br />");
    console.log(brk);

    for (var i = 1; i <= 10; i++) {

        var iSTR = i.toString();
        //create the h2 tag for the question and give the h2 tag text of the quote
        var h2Quote = $("<h2>").text("Question " + i + ": " + movieQuotes[iSTR].quote);
        //create 4 c posibilities tags and their text
        
        var choiceA = $('<label>' + '<input type="radio" name="q' + i + '"' + 'value="cA">').text(movieQuotes[iSTR].cA + '</label><br/>');
        var choiceB = $('<label>' + '<input type="radio" name="q' + i + '"' + 'value="cB">').text(movieQuotes[iSTR].cB + '</label><br/>');
        var choiceC = $('<label>' + '<input type="radio" name="q' + i + '"' + 'value="cC">').text(movieQuotes[iSTR].cC + '</label><br/>');
        var choiceD = $('<label>' + '<input type="radio" name="q' + i + '"' + 'value="cD">').text(movieQuotes[iSTR].cD + '</label><br/>');
        
        // qRow.append(h2Quote, choiceA, brk, choiceB, brk, choiceC, brk, choiceD, brk);
        // Append the table row to the table body
        
        h2Quote.append(choiceA, choiceB, choiceC, choiceD);
     
        $("form").append(h2Quote);
    }

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
    };
    //call function that appends questions by looping through objects and adding each one to the screen//
    addQuestionsToPage(movieQuotes);
});

//----function that starts and displays



// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(timeUp, 1000 * 15);

// // * You'll create a trivia form with multiple choice or true/false options (your choice).

// //* The player will have a limited amount of time to finish the quiz. 

// //* The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// //* Don't let the player pick more than one c per question.

// //* Don't forget to include a countdown timer.

// //page starts with a display asking player to click button to start timed game
// // when button is clicked content will be removed 
// //a GIF of old movie countdown will appear for 5 seconds then a function that will load a page of questions and choices will be appended with jQuery.
// //counter will start and displayed to player on top right
// // player can select one choice per question
// // we can assign each choice to a question a value correct choices are worth 1pt and wrong cs are 0 // or we can creat an object of the answers that pairs questions with answers (key & value)
// //after time is up all choicess are searched for in array of correct answers or checked to see if they match the answerKEy)
// //we can create an object of the questions with each question as its own object with choices that are assigned numerical values

// //create game Object with questions & an answer key //

// var movieQuotes = {
//     1: {
//         quote: "What we've got here is failure to communicate. ",
//         cA: "The Shawshank Redemption",
//         cB: "Cool Hand Luke",
//         cC: "Top Gun",
//         cD: "Butch Cassidy and the Sundance Kid"
//     },

//     2: {
//         quote: "Movies don't create psychos. Movies make psychos more creative! ",
//         cA: "American Psycho",
//         cB: "Haloween H20",
//         cC: "Psycho",
//         cD: "Scream"
//     },

//     3: {
//         quote: "That rug really tied the room together. ",
//         cA: "Fight Club",
//         cB: "Pulp Fiction",
//         cC: "The Big Lebowski",
//         cD: "Fargo"
//     },

//     4: {
//         quote: "I have been touched by your kids...and I'm pretty sure that I've touched them. ",
//         cA: "School of Rock",
//         cB: "Kindergarten Cop",
//         cC: "Twins",
//         cD: "Bad Teacher"
//     },

//     5: {
//         quote: "You are a sad, strange little man and you have my pity. ",
//         cA: "The Incredibles",
//         cB: "Up",
//         cC: "Toy Story",
//         cD: "Megamind"
//     },

//     6: {
//         quote: "I am serious... and don't call me Shirley. ",
//         cA: "Monty Python",
//         cB: "Hot Shots Part Deux",
//         cC: "Naked Gun",
//         cD: "Airplane!"
//     },

//     7: {
//         quote: "I never had any friends later on like the ones I had when I was 12, Jesus, does anyone? ",
//         cA: "Dazed and Confused",
//         cB: "Stand By Me",
//         cC: "The Sandlot ",
//         cD: "The Mighty Ducks"
//     },

//     8: {quote: "Mess with the bull young man you'll get the horns. ",
//         cA: "Pretty in Pink",
//         cB: "Sixteen Candles",
//         cC: "Breakfast Club",
//         cD: "Say Anything"
//     },

//     9: {
//         quote: "We don't need no stinking badges! ",
//         cA: "Casablanca",
//         cB: "Dirty Harry",
//         cC: "Treasure of the Sierra Madre",
//         cD: "The Good the Bad and the Ugly"
//     },

//     10: {
//         quote: "I love the smell of napalm in the morning. ",
//         cA: "Platoon",
//         cB: "Saving Private Ryan",
//         cC: "Full-Metal Jacket",
//         cD: "Apocalypse Now"
//     },

//     "cKey" : {
        // 1 : "cB",
        // 2 : "cD",
        // 3 : "cC",
        // 4 : "cA",
        // 5 : "cC",
        // 6 : "cD",
        // 7 : "cB",
        // 8 : "cC",
        // 9 : "cC",
        // 10 : "cD"
//     }

// }
// //----------Global Variables---------//

// //array of correct cs
// var correctcs = ["Cool Hand Luke", "Scream","The Big Lebowski", "School of Rock", "Toy Story", "Airplane!", "Stand By Me", "Breakfast Club", "Treasure of the Sierra Madre", "Apocalypse Now" ];

// // count correct cs from player
// var correctCount = 0;

// //player c selection
// var playerSelection = 0;

// //correct c
// var correctSelection = 1;

// var score = 0;

// var gameOver = false;


// //----- function to add questions to page-------//

// var addQuestionsToPage = function(obj) {
//     for(var i = 0; i <= 10; i++) {
//         //create the h2 tag for the question
//         var h2Quote = $("<h2>").text("Question " + i + ": " + cKey.i.quote); 
//         //give the h2 tag text of the quetion

//         //create 4 c posibilities tags
//         // assigne eah the appropriate text
//         var tRow = $("<tr>");
//         var titleTd = $("<td>").text(response.Title);
//         var yearTd = $("<td>").text(response.Year);
//         var actorsTd = $("<td>").text(response.Actors);

//         // Append the newly created table data to the table row
//         tRow.append(titleTd, yearTd, actorsTd);
//         // Append the table row to the table body
//         $("tbody").append(tRow);
//       }

//     }




// //-------------funtion to start Old Movie countdown timer 5 seconds------------//

// $("#startBTN").click(function () {
//     //remove start screen and add countdown gif image
//     $(".startScreen").remove();
//     $("#startGameScreen").append('<img src="assets/images/5SecCountdown.gif">');

//     setTimeout(fiveSeconds, 1000 * 5);

//     function fiveSeconds() {
//         //remove countdown GIF
//         $("#startGameScreen").remove();
//     };
//     //call function that appends questions by looping through objects and adding each one to the screen//
//     addQuestionsToPage();
// });

// //----function that starts and displays



// // setTimeout(tenSeconds, 1000 * 10);
// // setTimeout(timeUp, 1000 * 15);