$(document).ready(function () {

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
        makeQuestionaire(movieQuotes);
    });

    //---------------create target elements from HTML page for function
    var questionsContainer = $("#questions");
    var resultsContainer = $("#results");
    var submitButton = $("#submit");

    //------------------function that builds quiz
    var makeQuestionaire = function() {
        $("#questionaire").show();
        var output = [];
        //for each loop - to loop through each object in array and store the output in variable choices
        movieQuotes.forEach(function(currentQuote, quoteNumber) {
            var choices =[];
            for(letter in currentQuote.choices){
                //add an HTML radio button
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
                <div class="choices"> ${choicess.join('')} </div>`
              );
            }
          );
          questionsContainer.innerHTML = output.join('');

        }




    function showResults() {

    }
    // display quiz right away
    makeQuestionaire();
    // on submit, show results
    $("#submit").click(showResults);
    

});