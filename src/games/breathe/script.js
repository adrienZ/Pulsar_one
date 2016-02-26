

var date = new Date();
var timer = Date.now(); 
var average = 800;
var speed = 0;

var circle = document.querySelector('.second-circle');
var avg_stats = document.querySelector('.stats .average');
var warnings_stats = document.querySelector('.stats .warnings');
var sound = document.querySelector('audio');



document.addEventListener("keydown", function(touche) { 
    if (touche.keyCode == 32) {

    	sound.play();
    	sound.currentTime = 0;
    	average = Math.round( ( average + (Date.now() - timer) ) / 2) ;
    	avg_stats.innerHTML = average;

    	if (average > 820 || average < 700) {
    		speed = speed + 1;
    	}
    	else {
    		speed = 0;
    	}


    	switch(speed) {
    		case 0 :
    			warnings_stats.innerHTML = "";
    			break;
    		case 3 :
    			warnings_stats.innerHTML = "Vous n'êtes pas réguliés";
    			break;
    		case 6 :
    			warnings_stats.innerHTML = "Attention à Rainmaker";
    			break;
    	}

    	timer = Date.now();
        air();     
    }
}, false); 




function air() {
	circle.classList.add('heart');
	setTimeout(function(){
		circle.classList.remove('heart');
	},200);

}