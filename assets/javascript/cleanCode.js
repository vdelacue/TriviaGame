// create an array of objects that contains movie quote, an object of choices key as letter and value of choice, correct choice

var movieQuotes = [

    {
        quote: "What we've got here is failure to communicate. ",
        choices: [
            "The Shawshank Redemption",
            "Cool Hand Luke",
            "Top Gun",
            "Butch Cassidy and the Sundance Kid"
        ],
        correctChoice: "Cool Hand Luke",
        userChoice: ""

    },

    {
        quote: "Movies don't create psychos. Movies make psychos more creative! ",
        choices: [
            "I know what you did last summer",
            "Haloween H20",
            "Psycho",
            "Scream"
        ],
        correctChoice: "Scream",
        userChoice: ""

    },

    {
        quote: "That rug really tied the room together. ",
        choices: [
            "American Psycho",
            "Pulp Fiction",
            "The Big Lebowski",
            "Fargo"
        ],
        correctChoice: "The Big Lebowski",
        userChoice: ""
    },

    {
        quote: "I have been touched by your kids...and I'm pretty sure that I've touched them. ",
        choices: [
            "School of Rock",
            "Kindergarten Cop",
            "Twins",
            "Bad Teacher"
        ],
        correctChoice: "School of Rock",
        userChoice: ""
    },

    {
        quote: "You are a sad, strange little man and you have my pity. ",
        choices: [
            "The Incredibles",
            "Up",
            "Toy Story",
            "Megamind"
        ],
        correctChoice: "Toy Story",
        userChoice: ""
    },

    {
        quote: "I am serious... and don't call me Shirley. ",
        choices: [
            "Monty Python",
            "Hot Shots Part Deux",
            "Naked Gun",
            "Airplane!"
        ],
        correctChoice: "Airplane!",
        userChoice: ""
    },

    {
        quote: "I never had any friends later on, like the ones I had when I was 12, Jesus, does anyone? ",
        choices: [
            "Dazed and Confused",
            "Stand By Me",
            "The Sandlot ",
            "The Mighty Ducks"
        ],
        correctChoice: "Stand By Me",
        userChoice: ""
    },

    {
        quote: "Mess with the bull young man you'll get the horns. ",
        choices: [
            "Pretty in Pink",
            "Sixteen Candles",
            "Breakfast Club",
            "Say Anything"
        ],
        correctChoice: "Breakfast Club",
        userChoice: ""
    },

    {
        quote: "We don't need no stinking badges! ",
        choices: [
            "Casablanca",
            "Dirty Harry",
            "Treasure of the Sierra Madre",
            "The Good the Bad and the Ugly"
        ],
        correctChoice: "Treasure of the Sierra Madre",
        userChoice: ""
    },

    {
        quote: "I love the smell of napalm in the morning. ",
        choices: [
            "Platoon",
            "Saving Private Ryan",
            "Full-Metal Jacket",
            "Apocalypse Now"
        ],
        correctChoice: "Apocalypse Now",
        userChoice: ""
    }
];


// functions that handles button clicks for start button and submit button

//start Button
$("#startBTN").click(function () {
    //remove start screen and add countdown gif image
    $(".startScreen").remove();
    $("#startGameScreen").append('<img src="assets/images/5SecCountdown.gif">');

    setTimeout(fiveSeconds, 1000 * 5);

    function fiveSeconds() {
        //remove countdown GIF
        $("#startGameScreen").remove();
        $("#questionaire").show();
        $("#questionaire").addClass('quotes')
    };
    //call function that appends questions by looping through objects and adding each one to the screen//
    makeQuiz(movieQuotes);
});

//function that builds a quiz
var makeQuiz = function (arr) {
    // for (var i = 0; i < movieQuotes.length; i++) {
    //     var h2Quote = $("<h2>").text("Question " + (i + 1) + ": " + movieQuotes[i].quote);
    //     $("#questions").append(h2Quote);
    //     for(var x = 0; x < movieQuotes[i].choice.length; x++) {
            
    //     }

    // }
    movieQuotes.forEach( function(question, index) {
        var h2Quote = $("<h2>").text("Question " + (index + 1) + ": " + question.quote);
        $("#questions").append(h2Quote);
        question.choices.forEach( function(choice){
            $("#questions").append(
                `<div class="form-check form-check-inline my-2">
                <input class="form-check-input" name="${index}" type="radio" id="${choice}" value="${choice}">
                <label class="form-check-label answers" for="${choice}">${choice}</label>
              </div>`
              );
        })
    })

   

}

$('#questions').on('change', '.form-check-input', function() {
        
    // GET question index out of "name" attribute so we know what question you answered
    const questionIndex = $(this).attr('name');
    // get value out of radio button selected
    console.log(questionIndex);
    const answer = $(this).val();
    // set answer to question's userAnswer property
    console.log(answer);
    movieQuotes[questionIndex].userChoice = answer;
   });


//function that displays results

//