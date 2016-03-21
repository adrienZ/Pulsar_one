var square_move = document.querySelector('.square-move');
var win_windows = document.querySelector('.win');


window.addEventListener('keydown',function(e){
  var square_position = square_move.offsetLeft;
  if(e.keyCode == 32){
    square_move.style.border = '4px solid red';
  }
  if((e.keyCode == 32) && ((square_position > 167) && (square_position < 324))){
    console.log("win");
    console.log(square_position);
    square_move.style.border = '4px solid rgb(44, 175, 38)';
    square_move.style.animation = 'catchMe 2.5s ease-in-out 0s alternate infinite paused forwards';
    square_move.classList.add('fade');
    win_windows.classList.toggle('fade');
    console.log(win_windows.classList.contains('fade'));
  }
});
window.addEventListener('keyup',function(e){
  if(e.keyCode == 32){
    square_move.style.border = '4px solid rgb(238, 207, 23)';
  }
});
