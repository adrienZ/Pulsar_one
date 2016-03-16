var container = document.querySelector('.personality_test .container');
var windowsPanel = document.querySelector('.personality_test .windows-panel');
var title = windowsPanel.querySelector('.personality_test h1');
var subTitle = windowsPanel.querySelector('.personality_test h2');
var question = windowsPanel.querySelector('.personality_test .question1');
var answers = windowsPanel.querySelectorAll('.personality_test input');
var div_reponse = windowsPanel.querySelector('.personality_test .reponse');
var index = 1;
var results = [0, 0, 0];

console.log('obj');
/* ---------- Slide window -------------*/

var slideFunction = function (event) {
    if (event.keyCode == 32) {
        container.classList.toggle('blur');
        windowsPanel.classList.toggle('animation');
        title.classList.toggle('animation');
        subTitle.classList.toggle('animation');
        question.classList.toggle('animation');
        window.removeEventListener('keydown', slideFunction, false);
    }
}

window.addEventListener('keydown', slideFunction, false);



/* ---------- Answers click ---------- */

for (var i = 0; i < answers.length; i++) {

    answers[i].addEventListener('change', function () {

        index += 1;
        if (this.value == 1)
            results[0]++;
        else if (this.value == 2)
            results[1]++;
        else
            results[2]++;
        console.log(this.value);
        question.classList.toggle('gone');
        question = windowsPanel.querySelector('.personality_test .question' + index);
        question.classList.toggle('animation');

        if (index === 8) {
            var biggest = Math.max.apply(Math, results);

            if (results[0] === biggest)
                div_reponse.innerHTML = "Votre profil est :<br> Le courageux";
            else if (results[1] === biggest)
                div_reponse.innerHTML = "Votre profil est :<br> Le sage";
            else
                div_reponse.innerHTML = "Votre profil est :<br>Le brute";
            console.log("Jeu fini !");
        }
    });

}