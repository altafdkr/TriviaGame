// Initialize variables
var onQuestion;
var timer;
var timeLeft;
var forwarder;

// Questions Array
var questions = [
    {
        "movie": "Superman",
        "image": "superman.png",
        "question": "What is another name for Superman?",
        "correctans": "The Man of Steel",
        "answers": [
            "The Red Redeemer", 
            "The Masked Avenger",
            "The Caped Crusader",
            "The Man of Steel" ]
    },
    {
        "movie": "Batman",
        "image": "batman.png",
        "question": "What is the name of Batman's secret identity?",
        "correctans": "Bruce Wayne",
        "answers": [
            "Bruce Devon", 
            "Bruce Wayne",
            "Bruce Davis",
            "Devon Bruce"
        ]
    },
    {
        "movie": "Spiderman",
        "image": "spiderman.png",
        "question": "How did Spiderman get his superpowers?",
        "correctans": "He was bitten by a radioactive spider",
        "answers": [
            "He was caught in a chemical explosion", 
            "He was bombarded by cosmic rays",
            "He was born with his powers",
            "He was bitten by a radioactive spider"
        ]
    },
    {
        "movie": "Iron Man",
        "image": "ironman.png",
        "question": "Where is Stark Enterprises headquartered?",
        "correctans": "Los Angeles",
        "answers": [
            "Los Angeles", 
            "Miami",
            "London",
            "Montreal"
        ]
    },
    {
        "movie": "Superman",
        "image": "superman.png",
        "question": "What is Superman's weakness?",
        "correctans": "Kryptonite",
        "answers": [
            "Samsonite", 
            "Cosmonite",
            "Kryptonite",
            "Plutonite"
        ]
    },
    {
        "movie": "Batman",
        "image": "batman.png",
        "question": "Batman protects what city?",
        "correctans": "Gotham City",
        "answers": [
            "Chicago", 
            "Gotham City",
            "Metropolis",
            "New York City"
        ]
    }
];

// Start Function
$(document).on("click", "#startBtn", function() {

    onQuestion = 0;
    nextQuestion();

});


// When user clicks on answer
$(document).on("click", ".answer", function() {
    // Stop timer first
    stopTimer();
    // If answer is correct
    if( $(this).text() == questions[onQuestion].correctans ) {
        $("#question").html("Let's see if get the next one ..");
        $("#answers").html("<h1>\"" + questions[onQuestion].correctans + "\" is correct!</h1><br><br>");
        // increment to next question number
        onQuestion++;
        // If all questions are answered
        if (onQuestion == questions.length) {
            $("#answers").empty();
            $("#message").empty();
            $("#timer").empty();
            $("#heroimg").html($("<img>").attr('class', 'img-fluid').attr('src', "assets/images/congrats.gif"));
            $("#question").html("YOU WON!");
            $("#answers").html("<h1>Congratulations! You are super good.</h1><br><br>");
            $("#answers").append($("<button>").attr('class', 'btn btn-success btn-lg').attr('id', 'startBtn').text("Restart Game"));
        } else {
            // Else set timer to move to next question
            forwarder = setInterval(nextQuestion, 3000);
        }
        
    // if answer is wrong
    } else {
        // End Game and show restart
        $("#question").html("You got that wrong!");
        $("#answers").html("<h1>The correct answer is \"" + questions[onQuestion].correctans + "\"</h1><br><br>");
        $("#heroimg").html($("<img>").attr('class', 'img-fluid').attr('src', "assets/images/wrong.gif"));
        $("#answers").append($("<button>").attr('class', 'btn btn-success btn-lg').attr('id', 'startBtn').text("Restart Game"));
    }; 

    
});

// Next Question Function
function nextQuestion() {
    // Start Timer 
    runTimer();
    // Display movie and possible answers
    $("#message").html("Movie: " + questions[onQuestion].movie);
    $("#question").html(questions[onQuestion].question);
    $("#answers").empty();
    $("#answers").html($("<div>").attr("id", "answers-list").attr("class", "list-group"));
    // Loop to show all possible answers
    for (i=0; i < questions[onQuestion].answers.length; i++) {
        $("#answers-list").append("<a href=\"#\" class=\"list-group-item list-group-item-action answer\">" + questions[onQuestion].answers[i] + "</a>");
    };
    // Update super hero image
    $("#heroimg").html($("<img>").attr('class', 'img-fluid').attr('src', "assets/images/" + questions[onQuestion].image));

    
};

// Timer function
function runTimer() {
    clearInterval(timer);
    clearInterval(forwarder);
    timeLeft = 30;
    timer = setInterval(decrement, 1000);
}

// Stop Timer Function
function stopTimer() {
    clearInterval(timer);
    $("#time").html("");
}

// Decrement time left
function decrement() {
    timeLeft--;
    $("#time").html(timeLeft + " seconds left")
    if (timeLeft == 0) {
        // if time runs out stop timer and lose game
        stopTimer();
        $("#time").html("Time is up!");
        $("#message").html("You Lose");
        $("#question").html("Oh shoot! You ran out of time!");
        $("#heroimg").empty();
        $("#answers").html("<h1>Try again!</h1> <br><br>");
        $("#answers").append($("<button>").attr('class', 'btn btn-success btn-lg').attr('id', 'startBtn').text("Restart Game"));
    };
}




