$(document).ready(function () {

    $("#questionaire").hide();
    $("#questions").hide();
    $("#submit").hide();
    $("#results").hide();

    var movieQuotes = [{
            quote: "What we've got here is failure to communicate. ",
            choice: {
                a: "The Shawshank Redemption",
                b: "Cool Hand Luke",
                c: "Top Gun",
                d: "Butch Cassidy and the Sundance Kid"
            },
            correctChoice: "b"
        },

        {
            quote: "Movies don't create psychos. Movies make psychos more creative! ",
            choice: {
                a: "I know what you did last summer",
                b: "Haloween H20",
                c: "Psycho",
                d: "Scream"
            },
            correctChoice: "d"

        },

        {
            quote: "That rug really tied the room together. ",
            choice: {
                a: "American Psycho",
                b: "Pulp Fiction",
                c: "The Big Lebowski",
                d: "Fargo"
            },
            correctChoice: "c"
        },

        {
            quote: "I have been touched by your kids...and I'm pretty sure that I've touched them. ",
            choice: {
                a: "School of Rock",
                b: "Kindergarten Cop",
                c: "Twins",
                d: "Bad Teacher"
            },
            correctChoice: "a"
        },

        {
            quote: "You are a sad, strange little man and you have my pity. ",
            choice: {
                a: "The Incredibles",
                b: "Up",
                c: "Toy Story",
                d: "Megamind"
            },
            correctChoice: "c"
        },

        {
            quote: "I am serious... and don't call me Shirley. ",
            choice: {
                a: "Monty Python",
                b: "Hot Shots Part Deux",
                c: "Naked Gun",
                d: "Airplane!"
            },
            correctChoice: "d"
        },

        {
            quote: "I never had any friends later on, like the ones I had when I was 12, Jesus, does anyone? ",
            choice: {
                a: "Dazed and Confused",
                b: "Stand By Me",
                c: "The Sandlot ",
                d: "The Mighty Ducks"
            },
            correctChoice: "b"
        },

        {
            quote: "Mess with the bull young man you'll get the horns. ",
            choice: {
                a: "Pretty in Pink",
                b: "Sixteen Candles",
                c: "Breakfast Club",
                d: "Say Anything"
            },
            correctChoice: "c"
        },

        {
            quote: "We don't need no stinking badges! ",
            choice: {
                a: "Casablanca",
                b: "Dirty Harry",
                c: "Treasure of the Sierra Madre",
                d: "The Good the Bad and the Ugly"
            },
            correctChoice: "c"
        },

        {
            quote: "I love the smell of napalm in the morning. ",
            choice: {
                a: "Platoon",
                b: "Saving Private Ryan",
                c: "Full-Metal Jacket",
                d: "Apocalypse Now"
            },
            correctChoice: "d"
        }
    ];

    //--------------------------start screen------------------//



    //---------------create target elements from HTML page for function
    var questionsContainer = $("#questions");
    var resultsContainer = $("#results");
    var submitButton = $("#submit");

    //------------------function that builds quiz
    var makeQuestionaire = function () {
        var output = [];
        //for each loop - to loop through each object in array and store the output in variable choices
        movieQuotes.forEach(function (currentQuote, quoteNumber) {
            var choices = [];
            for (letter in currentQuote.choices) {
                //add an HTML radio button
                console.log(letter);
                choices.push(
                    `<label>
                    <input type="radio" name="quote${quoteNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuote.choices[letter]}
                  </label>`

                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="quote"> ${currentQuote.quote} </div>
                <div class="choices"> ${choices.join('')} </div>`
            );
        });
        questionsContainer.innerHTML = output.join('');

    }





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
            $("#questions").show();
            $("#submit").show();
            $("#results").show();
            
        };
        //call function that appends questions by looping through objects and adding each one to the screen//
        makeQuestionaire();
    });
    // display quiz right away (in case top call isn't working) debugging why quiz is not appearing
    makeQuestionaire();

    function showResults() {
        // gather answer containers from our quiz
        var answerContainers = questionsContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var numCorrect = 0;

        // for each question...
        movieQuotes.forEach(function (currentQuote, quoteNumber) {

            // find selected answer
            var answerContainer = answerContainers[questionNumber];
            var selector = 'input[name=quote' + quoteNumber + ']:checked';
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + movieQuotes.length;
    }

    // on submit, show results
    $("#submit").click(showResults);


});