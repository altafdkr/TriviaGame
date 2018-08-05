
var message = "Press Start to Begin";
var time;

$("#message").html(message);
$("#time").html("6 Questions - 3 minutes");

var questions = [
    {
        "movie": "Superman",
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

console.log(questions);