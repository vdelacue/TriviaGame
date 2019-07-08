$(document).ready(function () {
    //hide elements until user hits start
    $("#questionaire").hide();
    $("#submit").hide();

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

    //--------------- Global Variables -----------//

    var numCorrect = 0;

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
        setTimeout(quizTime, 1000 * 15);
    });

    function quizTime() {
        //added timer
        $("#questionaire").append(timer)
    };

    //function that builds a quiz
    var makeQuiz = function (arr) {
        movieQuotes.forEach(function (question, index) {
            var h2Quote = $('<h2 class="h2q customfont">').text("Question " + (index + 1) + ": " + question.quote);
            $("#questions").append(h2Quote);
            $("#questions").append("<br>");
            question.choices.forEach(function (choice) {
                $("#questions").append(
                    `<div class="form-check form-check-inline my-2">
                <input class="form-check-input" name="${index}" type="radio" id="${choice}" value="${choice}">
                <label class="form-check-label answers" for="${choice}">${choice}</label>
              </div>`
                );
            })
        })
    };

    // function that stores user answer 
    $('#questions').on('change', '.form-check-input', function () {
        // GET question index out of "name" attribute so we know what question you answered
        const questionIndex = $(this).attr('name');
        // get value out of radio button selected
        console.log(questionIndex);
        const answer = $(this).val();
        // set answer to question's userAnswer property
        console.log(answer);
        movieQuotes[questionIndex].userChoice = answer;
    });

    // function that times quiz and then triggers the results 
    setTimeout(quizTime, 10000 * 5);



    //function that displays results 

    $("#submit").click(resultsFn);

    var resultsFn = function () {
        //clear interval
        clearInterval(intervalId);
        //loop through the object movieQuotes and see if the changed value of userChoice is the same as the correctChoice
        movieQuotes.forEach(function (question) {
            //update number of correct answers 
            if (question.correctChoice === question.userChoice) {
                numCorrect += 1;
            }
            //store correct answers 
            var h2Results = $('<h2>').text("You got " + numCorrect + " out of 10 correct!");
            $("#questions").remove();
            $("#submit").remove();
            $("#questionaire").append('<img src="assets/images/theEnd.gif" class="img-fluid rounded mx-auto d-block" alt="Responsive image">');
            $("#results").append(h2Results);
        })
    }
})