var arrow_up = document.querySelector('.arrow-up');
var arrow_bottom = document.querySelector('.arrow-bottom');
var arrow_right = document.querySelector('.arrow-right');
var arrow_left = document.querySelector('.arrow-left');
var choiceA = document.querySelector('.choiceA');
var choiceB = document.querySelector('.choiceB');
var choiceC = document.querySelector('.choiceC');
var choiceD = document.querySelector('.choiceD');




choiceA.addEventListener('click', function(){
		arrow_up.classList.toggle('onpress');
		choiceA.classList.toggle('selected');
});
choiceB.addEventListener('click', function(){
		arrow_right.classList.toggle('onpress');
		choiceB.classList.toggle('selected');
});
choiceC.addEventListener('click', function(){
		arrow_bottom.classList.toggle('onpress');
		choiceC.classList.toggle('selected');
});
choiceD.addEventListener('click', function(){
		arrow_left.classList.toggle('onpress');
		choiceD.classList.toggle('selected');
});



window.addEventListener('keydown', function(e){
	console.log(e.keyCode);
	switch (e.keyCode) {
		case 38:
		console.log('UP');
		arrow_up.classList.toggle('onpress');
		choiceA.classList.toggle('selected');
		break;
		case 39:
		console.log('RIGHT');
		arrow_right.classList.toggle('onpress');
		choiceB.classList.toggle('selected');
		break;
		case 37:
		console.log('LEFT');
		arrow_left.classList.toggle('onpress');
		choiceD.classList.toggle('selected');
		break;
		case 40:
		console.log('DOWN');
		arrow_bottom.classList.toggle('onpress');
		choiceC.classList.toggle('selected');
		break;
		default:
		break;
	}
});