var percept = 10;
var tour = 0;

nextLevel();

function nextLevel(){
  tour += 1;
  percept -=  1;
  if (percept == 1)
    percept = 2;
  var randColor = Math.round(Math.random() * 360);
  var baseColor = " hsl(" + randColor + ",90%,16%) ";
  var diffColor = " hsl(" + randColor + ",100%," + (16 + percept) + "%) ";
  
  var container = document.querySelector('.container');
  for (var i = 0; i < 81; i++){
    container.innerHTML += '<div class="color"></div>';
  }
  
  var cubes = document.querySelectorAll('.color');
  var randCube = Math.round(Math.random() * cubes.length);
  cubes[randCube].classList.add('different');
  var cube = document.querySelector('.different');

  for (var i = 0; i < cubes.length; i++) {
    cubes[i].style.backgroundColor = baseColor;
  }
  cube.style.backgroundColor = diffColor;
  
  cube.addEventListener('click', function(){
     container.innerHTML = "";
    nextLevel();
  });
  
  if (tour == 9){
    //FIN DU JEU 
    alert("C'est gagné !");
  }

}
