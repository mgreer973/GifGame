	var ComputerNum = 0;
	var counter = 0;
	var crystals = ['red.png','yellow.png', 'blue.png', 'green.png']
	var wins = 0;
	var loses = 0;

	function startGame() {
		ComputerNum = 0;
		counter = 0;
		$("#crystals").empty();
///		for (var i=0; i< crystals.length; i++){
//      		var imageCrystal = $('<img>');
//		    imageCrystal.attr('data-num', getRandomInt(1, 12));
//		    imageCrystal.attr('src', 'assets/images/' + crystals[i]);
//	        imageCrystal.attr('alt', 'crystals');
//      		imageCrystal.addClass('crystalImage');
//      		$('#crystals').append(imageCrystal);
//    	}

		computerNum = getRandomInt(19, 120);		
		$('#computerGuess').text(computerNum);
		$('#totScore').text(' ');
	}

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max + 1 - min) + min ); 
	} 

	function playGame() {
	    $('.crystalImage').on('click', function(){
	      counter = counter + parseInt($(this).data('num'));
			$('#totScore').text(counter);
			if (counter == computerNum){
				wins++;
				$('#wins').text(wins);
		        alert('You won!!!!');
		        ready();
		    } else if(counter > computerNum){
		    	loses++;
		        alert('You lost!');
		        $('#loses').text(loses);
		        ready();
		    } 
	    }); 

	
	}

function ready() {
	startGame();
	playGame();
}

$( document ).ready(function() {
	ready();
});
