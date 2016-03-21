var container = document.querySelector('.container');
var windowsPanel = document.querySelector('.windows-panel');
var title = windowsPanel.querySelector('h1');
var subTitle = windowsPanel.querySelector('h2');
var div_dice = windowsPanel.querySelector('.div-dice');
var divplay1 = div_dice.querySelector('.player1');
var divplay2 = div_dice.querySelector('.player2');
var button = div_dice.querySelector('.button-play');
var results = div_dice.querySelector('.results');



/* ---------- Slide window -------------*/

var slideFunction = function (event) {
    if (event.keyCode == 32) {
        container.classList.toggle('blur');
        windowsPanel.classList.toggle('animation');
        title.classList.toggle('animation');
        subTitle.classList.toggle('animation');
        div_dice.classList.toggle('animation');
        window.removeEventListener('keydown', slideFunction, false);
    }
}

window.addEventListener('keydown', slideFunction, false);



var roll_dice = {
    //number of rounds in the game
    round: 3,
    dice_player: function (name) {
        this.name = name;
        this.victory = 0;
        this.add_victory = function () {
            this.victory++;
        };
        //dice throw
        this.getValue = function () {
            return Math.ceil(Math.random() * 6);
        };
        //player dices
        this.dice_0 = 0;
        this.dice_1 = 0;
        this.value = this.dice_0 + this.dice_1;
    },
    // one round
    match: function (player_1, player_2, state) {
        /*document.write(roll_dice.round + ' tour(s) restant(s) <br>');*/
        // new value for player dices
        for (var i = 0; i < arguments.length - 1; i++) {
            arguments[i].dice_0 = arguments[i].getValue();
            arguments[i].dice_1 = arguments[i].getValue();
            arguments[i].value = arguments[i].dice_0 + arguments[i].dice_1;
            if (i == 0) {
                var newdiv = document.createElement('div');
                divplay1.appendChild(newdiv);
                newdiv.classList.add('rounds');
                var theresult1 = arguments[i].value;
                var lance = setInterval(function () {
                    newdiv.innerHTML = Math.ceil(Math.random() * 6);
                }, 150);
                setTimeout(function () {
                    clearInterval(lance);
                    newdiv.innerHTML = theresult1;
                    if (state != 0)
                        button.classList.remove('unusable');
                }, 2500);

            } else {
                var newdiv2 = document.createElement('div');
                divplay2.appendChild(newdiv2);
                newdiv2.classList.add('rounds');
                var theresult2 = arguments[i].value;
                var lance2 = setInterval(function () {
                    newdiv2.innerHTML = Math.ceil(Math.random() * 6);
                }, 150);
                setTimeout(function () {
                    clearInterval(lance2);
                    newdiv2.innerHTML = theresult2;
                    if (state != 0)
                        button.classList.remove('unusable');
                }, 2500);
            }
        };
        //who win
        if (player_1.value > player_2.value) {
            player_1.add_victory();
            console.log(player_1.name + " à gagné", player_1.victory);
            state--;
            roll_dice.round = state;
        } else if (player_2.value > player_1.value) {
            player_2.add_victory();
            console.log(player_2.name + " à gagné", player_2.victory);
            state--;
            roll_dice.round = state;
        }
        //if equality reload
        else {
            /*document.write('égalité !!!! <br>');*/
            console.log('égalité');
            // roll_dice.match(roll_dice.opponents, roll_dice.hero, roll_dice.round);
        }
        if (state === 0) {
            button.classList.add('unusable');
            var resultdiv = setTimeout(function () {
                results.classList.remove("invisible");
                results.classList.add("visible");
                clearTimeout(resultdiv);
            }, 2800);

            if (player_1.victory > player_2.victory) {
                console.log(player_1.name + ' avez gagné la partie ' + player_1.victory + ' à ' + player_2.victory);
                results.innerHTML = player_1.name + ' avez gagné la partie ' + player_1.victory + ' à ' + player_2.victory;
            } else {
                console.log(player_2.name + ' a gagné la partie ' + player_2.victory + ' à ' + player_1.victory);
                results.innerHTML = player_2.name + ' a gagné la partie ' + player_2.victory + ' à ' + player_1.victory;
            }
        } else {
            var newRound = function () {
                button.removeEventListener('click', newRound, false);
                button.classList.add('unusable');
                roll_dice.match(roll_dice.opponents, roll_dice.hero, roll_dice.round);
            }
            button.addEventListener('click', newRound, false);

        }
    },
}
roll_dice.opponents = new roll_dice.dice_player('Vous');
roll_dice.hero = new roll_dice.dice_player('Bastardo');

var newRound = function () {
    button.removeEventListener('click', newRound, false);
    button.classList.add('unusable');
    roll_dice.match(roll_dice.opponents, roll_dice.hero, roll_dice.round);
}
button.addEventListener('click', newRound, false);