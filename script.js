$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["yes", "abundant yes", "indeed soon","it's inconceivable", "maybe", "listen to your heart", "its possible", "most definitely", "it is likely", "no", "keep dreaming"];
$("#answer").hide();

magic8Ball.askQuestion = function(question) {
	$("#8ball").effect("shake");
	$("#answer").fadeIn(4000);
  $("#8ball").attr("src", "img/magic8ballAnswer.png");


var randomNumber = Math.random ();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer = this.listOfAnswers[randomIndex];
	$("#answer").text(answer);
		 console.log(question);
        console.log(answer);
};

var onClick = function() {
$("#answer").hide();
$("#8ball").attr("src", "img/magic8BallQuestion.png");
 setTimeout(function() {
    var question = prompt("Ask the Magic 8 Ball a question:");
    magic8Ball.askQuestion(question); }, 1000);
};

$("#questionButton").click( onClick );

});


//var askQuestion = prompt("Ask the Magic 8 Ball a question:");
//magic8Ball.askQuestion(askQuestion);
