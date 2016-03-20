 var compteur = $.el('#compteur');
 var number = 0;
 var current_act = parseInt(user.game[1]);

 var result = {};

 console.log(current_act, user.new);


 $.el('h1').innerHTML = 'Acte ' + user.game[1] + ' - ' + data['act_' + current_act].prologue.title + ' : <span id="compteur"></span>'
 $.el('.text h1').innerHTML = 'Passage à l\'acte suivant : Acte ' + (current_act + 1);
 result.choices = $.el('.sectionEvaluation');
 if (!user.important_decisions || user.important_decisions.length === 0) {
     console.log('error');
     if (current_act === 3) {} else {
         window.location = 'template.html';
     }
 } else {
     user.important_decisions.forEach(function (decision, index) {
         console.log(decision, index);
         console.log(data.backstory.choice_comparaison['act_' + user.game[1]][index]);
         if (data.backstory.choice_comparaison['act_' + user.game[1]][index]) {

             var dat_data = data.backstory.choice_comparaison['act_' + user.game[1]][index]['fact' + decision];
             var new_viz = document.createElement('div');
             new_viz.className = 'evaluation';
             var choice_color = document.createElement('p');
             if (dat_data.percentage > 50) {
                 choice_color.className = 'good';
             } else {
                 choice_color.className = 'bad';
             }
             choice_color.innerHTML = dat_data.explanation;
             var percentage_text = dat_data.percentage += "%";
             new_viz.innerHTML = '<div class="layerOne"><h1>' + dat_data.title + '</h1><h2>' + percentage_text + '</h2></div><div class="layerTwo"><div class="bar"><div class="progress-bar"></div></div>';
             result.choices.appendChild(new_viz);
             new_viz.querySelector('.layerTwo').appendChild(choice_color);
             new_viz.querySelector('.progress-bar').style.width = percentage_text;
         }
     });
 }


 //show succès unclocked 
 result.achivements = $.el('.achievements');
 user.success.forEach(function (achiv) {
     var badge = document.createElement('div');
     var badge_img = document.createElement('img');
     badge_img.setAttribute('src', achiv.img);
     result.achivements.appendChild(badge);
     badge.className = 'badges won';
     badge.appendChild(badge_img);
 });
 //others
 data.backstory.success.forEach(function (success) {
     var already_there = false;
     for (var i = 0; i < user.success.length; i++) {

         if (user.success[i].id === success.id) {
             already_there = true;
         }
     }
     if (already_there) {} else {
         var badge = document.createElement('div');
         var badge_img = document.createElement('img');
         badge_img.setAttribute('src', success.img);
         result.achivements.appendChild(badge);
         badge.className = 'badges';
         badge.appendChild(badge_img);
     }

 });


 $.el('.nextAct').addEventListener('click', function () {
     user.new = parseInt(current_act) + 1;
     user.game = 'prologue';
     user.important_decisions = [];
     savegame.erase_save('user_save', user);
     window.location = 'template.html';

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