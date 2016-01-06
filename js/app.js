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

      var guessNumber = $('#userGuess').val();
      displayGuessNumber(guessNumber);
      calculateTemp(guessNumber);

  		clearGuess();	

  	});

    $("a.new").click(function(){
      randomNumber = setRandomNumber();
      guessCount = -1;
      increaseGuessCount();
      resetGuessNumber();
      displayFeedback('Make your Guess!');
      console.log('Make your Guess!');

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

function displayGuessNumber(guessNumber) {
  $('#guessList').append('<li>' + guessNumber + '</li>');

}

function resetGuessNumber() {
  $('#guessList').empty();
}

function calculateTemp(guessNumber) {
  var feedback = '';

  var difference = Math.abs(guessNumber - randomNumber);

  if (guessNumber == randomNumber) {
    feedback = 'You are Correct';
  } else if (difference < 10) {
    feedback = 'You are on Fire';
  } else if (difference < 20) {
    feedback = 'You are Warmer';
  } else if (difference < 40) {
    feedback = 'You are Warm';
  } else if (difference < 50) {
    feedback = 'You are Cold';
  } else {
    feedback = 'You are Freezing'
  }

  displayFeedback(feedback);
  console.log(feedback);

}

function displayFeedback(feedback) {
  $('#feedback').text(feedback);
}

function clearGuess() {
	$('#userGuess').val('');
}
