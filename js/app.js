var randomNumber = 0;
var guessCount = 0;

$(document).ready(function(){
	
	randomNumber = setRandomNumber();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		// Fadeout the Overlay 
  		$(".overlay").fadeOut(1000);
  	});

  	$('.input-form').submit(function(event) {
  		event.preventDefault();

  		increaseGuessCount();

  		clearGuess();	

  	});

});

function setRandomNumber() {
	var tempRandom = Math.floor((Math.random() * 100) + 1);
	console.log('The Random Number Is ' + tempRandom);
	return tempRandom;
}

function increaseGuessCount() {
	// guessCount = guessCount + 1;
	guessCount++;
	console.log('The Guess Count Is ' + guessCount);
	$('#count').text(guessCount);
} 

function clearGuess() {
	$('#userGuess').val('');
}

// Math.abs( whatever ends up being here becomes positive )
// difference = users guess - secret numbe