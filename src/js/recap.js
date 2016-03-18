 var compteur = $.el('#compteur');
 var number = 0;
 var current_act = parseInt(user.game[1]);

 var result = {};
 result.achivements = $.el('.achievements');
 user.success.forEach(function (achiv) {
     var badge = document.createElement('div');
     var badge_img = document.createElement('img');
     badge_img.setAttribute('src', achiv.img);
     result.achivements.appendChild(badge);

     badge.className = 'badges won';
     badge.appendChild(badge_img);


 });


 //console.log(current_act, user.new);
 //        if (current_act === user.new - 1) {
 //console.log('check ok');
 $.el('.nextAct').addEventListener('click', function () {
     console.log(current_act);
     user.new = parseInt(current_act) + 1;
     user.game = 'prologue';
     savegame.erase_save('user_save', user);
     window.location = '/template.html';

 });

 function clampFunction(number, limit, nameInterval) {
     if (number == limit + 1) {
         clearInterval(nameInterval);
     }
 }

 var numberIncrementation = window.setInterval(function () {
     compteur.innerText = number;
     number++;
     clampFunction(number, 100, numberIncrementation);
 }, 30);
 //        } else { // console.log('check NOT OK'); // window.location = '/template.html' // }