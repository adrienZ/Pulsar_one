var character_base = document.querySelector('.characters');
var arrow_prev = document.querySelector('.prev');
var arrow_next = document.querySelector('.next');
var limit_characters = document.querySelectorAll('.characters .character');
var description_char = document.querySelectorAll('.description');
var image_char = document.querySelectorAll('.image_placeholder');
var order = 0;
var evolution_position = -100;
var evolution_offset = 0;


arrow_prev.addEventListener('click', function (e) {
    if (order < limit_characters.length && order <= 0) {
        order = 0;
        character_base.style.transform = 'translateX('+evolution_position+'vw)';
    } else {
        order--;
        character_base.style.transform = 'translateX('+evolution_position*order+'vw)';
        window.setTimeout(function () {
            window.setTimeout(function () {
                description_char[order].style.transform = 'translateX(' + 1.5 + 'vw)';
            }, 100)
            image_char[order].style.transform = 'translateX(' + -1 + 'vw)';
        }, 300);
    }
    console.log(evolution_position);
    console.log(order);
});
arrow_next.addEventListener('click', function (e) {
    if (order <= limit_characters.length) {
        order++;
        character_base.style.transform = 'translateX('+evolution_position*order+'vw)';
        window.setTimeout(function () {
            window.setTimeout(function () {
                description_char[order].style.transform = 'translateX(' + -1.5 + 'vw)';
            }, 100)
            image_char[order].style.transform = 'translateX(' + 1 + 'vw)';
        }, 300);
    } else {
        character_base.style.transform = 'translateX('+evolution_position*limit_characters.length+'vw)';
    }
    console.log(evolution_position);
    console.log(order);
});


// var character_base = document.querySelector('.characters');
// var arrow_prev = document.querySelector('.prev');
// var arrow_next = document.querySelector('.next');
// var limit_characters = document.querySelectorAll('.characters .character');
// var description_char = document.querySelectorAll('.description');
// var image_char = document.querySelectorAll('.image_placeholder');
// var order = 0;
// var evolution_position = -100;
// var evolution_offset = 0;


// arrow_prev.addEventListener('click', function(e){
// 	if (order < limit_characters.length && order <= 0){
// 		order = 0;
// 		character_base.style.transform = 'translateX('+evolution_position*order+'vw)';
// 	} else {
// 		order--;
// 		character_base.style.transform = 'translateX('+evolution_position*order+'vw)';
// 		window.setTimeout(function(){
// 			window.setTimeout(function(){
// 				description_char[order].style.transform = 'translateX('+1.5+'vw)';
// 			}, 100)
// 			image_char[order].style.transform = 'translateX('+-1+'vw)';
// 		}, 300);
// 	}
// 	console.log(evolution_position);
// 	console.log(order);
// });
// arrow_next.addEventListener('click', function(e){
// 	if (order < limit_characters.length){
// 		order++;
// 		character_base.style.transform = 'translateX('+evolution_position*order+'vw)';
		
// 		window.setTimeout(function(){
// 			window.setTimeout(function(){
// 				description_char[order].style.transform = 'translateX('+-1.5+'vw)';
// 			}, 100)
// 			image_char[order].style.transform = 'translateX('+1+'vw)';
// 		}, 300);
// 	} else {
// 		order = limit_characters.length;
// 		character_base.style.transform = 'translateX('+evolution_position*order+'vw)';
// 	}
// 	console.log(order);
// });