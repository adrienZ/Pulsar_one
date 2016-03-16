mini_games = {};

mini_games.personality_test = function () {
    var container = document.querySelector('.personality_test .container');
    var windowsPanel = document.querySelector('.personality_test .windows-panel');
    var title = windowsPanel.querySelector('.personality_test h1');
    var subTitle = windowsPanel.querySelector('.personality_test h2');
    var question = windowsPanel.querySelector('.personality_test .question1');
    var answers = windowsPanel.querySelectorAll('.personality_test input');
    var div_reponse = windowsPanel.querySelector('.personality_test .reponse');
    var index = 1;
    var results = [0, 0, 0];
    /* ---------- Slide window -------------*/
    console.log(ui.finish_mini_game_redirect);
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

    //window.addEventListener('keydown', slideFunction, false);
    slideFunction({
        keyCode: 32,
    });


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

                if (results[0] === biggest) {
                    div_reponse.innerHTML = "Votre profil est :<br> Le courageux";
                    user.stats.strenght += 5;
                    user.stats.perception += 3;
                    user.stats.stamania += 5;
                    user.stats.luck += 2;
                    user.stats.intelligence += 2;
                    user.stats.agility += 3;
                    user.stats.loyalty += 5;
                } else if (results[1] === biggest) {
                    div_reponse.innerHTML = "Votre profil est :<br> Le sage";
                    user.stats.strenght += 1;
                    user.stats.perception += 5;
                    user.stats.stamania += 3;
                    user.stats.luck += 1;
                    user.stats.intelligence += 2;
                    user.stats.agility += 2;
                    user.stats.loyalty += 1;
                } else {
                    div_reponse.innerHTML = "Votre profil est :<br>Le brute";
                    user.stats.strenght += 7;
                    user.stats.perception += 3;
                    user.stats.stamania += 6;
                    user.stats.luck += 1;
                    user.stats.intelligence += 1;
                    user.stats.agility += 1;
                    user.stats.loyalty += 2;
                }
                console.log("Jeu fini !");
                savegame.erase_save('user_save', user);

                window.setTimeout(function () {
                    $.mini_game.className = 'mini-game';
                    render(current_act[ui.finish_mini_game_redirect]);
                    ui.finish_mini_game_redirect = undefined;
                    //here we go, we iterate throught the keys to change and adds the news values, wich can negative
                    Object.keys(user.stats).forEach(function (capacity, val) {
                        $.el('.user-stats ul li.' + capacity).querySelector('p:last-child').style.opacity = 0;
                        setTimeout(function () {
                            $.el('.user-stats ul li.' + capacity).querySelector('p:last-child').innerHTML = user.stats[capacity];
                            $.el('.user-stats ul li.' + capacity).querySelector('p:last-child').style.opacity = '';
                        }, 300);
                    });
                }, 4000);

            }


        });

    }
}