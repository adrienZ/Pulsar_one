mini_games = {};
var hacking;
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
};


mini_games.roll_dice = function () {
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

    // window.addEventListener('keydown', slideFunction, false);
    slideFunction({
        keyCode: 32,
    });



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
                window.setTimeout(function () {
                    $.mini_game.className = 'mini-game';
                    render(current_act[ui.finish_mini_game_redirect]);
                    ui.finish_mini_game_redirect = undefined;
                }, 4000);

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
};

mini_games.hacking = function () {
    function HackingGame() {
        /**** GAME PARAMETERS ****/
        this.game = document.getElementById("hackingZone");
        this.delay = 10; //millisecond between each letters
        this.password = ""; // password required
        this.life = 7; //Number of life
        this.randomCaracs = "^¨$£¤%*!§/:.;?,&~#'{([-|`_\^@)]=}+°<>"; //Random caracters
        this.randomLength = 30; // length of random line

        this.wordList = []; // list of all word you've pushed through encode function

        /* Create an alert box */
        this.alert = function (title, msg, callback) {
                var div = document.createElement("div"),
                    h1 = document.createElement("h1"),
                    p = document.createElement("p"),
                    a = document.createElement("a");

                h1.innerHTML = title;
                p.innerHTML = msg;
                a.innerHTML = "OK";

                div.className = "alert";
                a.className = "button";

                a.onclick = function () {
                    div.remove();
                }

                div.appendChild(h1);
                div.appendChild(p);
                div.appendChild(a);
                this.game.appendChild(div);

                if (typeof callback == "function") callback();
            }
            /* Write a simple line */
        this.writeLine = function (txt, callback) {
                var p = document.createElement("p"),
                    i = 0;

                this.game.appendChild(p);

                var timer = setInterval(function () {
                    p.innerHTML += txt.charAt(i);
                    i++;
                }, this.delay);
                setTimeout(function () {
                    clearInterval(timer);
                    if (typeof callback == "function") callback();
                }, this.delay * txt.length);
            }
            /* Write a lot of line, need to be in an array */
        this.write = function (txt, callback) {
                if (txt.length == 0) return false;
                else if (typeof txt == "string") txt = [txt];
                var that = this;
                that.writeLine(txt[0]);
                var total = 0;

                for (var i = 1; i < txt.length; i++) {
                    total += that.delay * txt[i - 1].length;
                    setTimeout((function (i) {
                        return function () {
                            that.writeLine(txt[i]);
                        };
                    })(i), total);
                }

                setTimeout(function () {
                    if (typeof callback == "function") callback();
                }, total + this.delay * txt[i - 1].length);
            }
            /* Make clickable word */
        this.setWord = function () {
                var nodes = this.game.childNodes;
                for (var j = 0; j < nodes.length; j++) {
                    for (var k = 0; k < this.wordList.length; k++) {
                        nodes[j].innerHTML = nodes[j].innerHTML.replace(this.wordList[k], "<a onclick='hacking.try(\"" + this.wordList[k] + "\")'>" + this.wordList[k] + "</a>");
                    }
                }
            }
            /* Get [SCORE] and [TRY] to replace with dy dynamics tags */
        this.setScore = function () {

                var node = this.game.childNodes[3];
                console.log(node);
                if ($.el('#hackingZone .alert a.button')) {
                    $.el('#hackingZone .alert a.button').addEventListener('click', function () {
                        this.parentElement.remove();
                    });
                }
                node.innerHTML = node.innerHTML.replace("[SCORE]", "<span id='hackingScore'>6</span>");
                node.innerHTML = node.innerHTML.replace("[TRY]", "<span id='hackingTry'></span>");
            }
            /* Create fake line with random caract and place the selected word into it at a random place */
        this.encode = function (word) {
                this.wordList.push(word);
                var p = "",
                    rdm = Math.random() * (this.randomLength - word.length);
                rdm = Math.floor(rdm);
                for (var x = 0; x < this.randomLength - word.length; x++) {
                    if (x == rdm) p += word;
                    else p += this.randomCaracs.charAt(Math.random() * this.randomCaracs.length);
                }
                return p;
            }
            /* Try to guess what could be the password */
        this.try = function (t) {
            var cpt = 0,
                reg = {};

            // If you've selected the good password
            if (t == this.password) {
                this.alert("ACCESS ACCEPTED", "Good password.", function () {
                    // Put here what happen when access is accepted and user push "ok" button
                    window.setTimeout(function () {
                        $.mini_game.className = 'mini-game';
                        render(current_act[ui.finish_mini_game_redirect]);
                        ui.finish_mini_game_redirect = undefined;
                    }, 2000);
                });
            }
            //if not
            else {
                // count how many letter are in common with the password
                for (var v = 0; v < t.length; v++) {
                    for (var w = 0; w < this.password.length; w++) {
                        if (t.charAt(v) == this.password.charAt(w)) {
                            if (!reg[this.password.charAt(w)]) {
                                reg[this.password.charAt(w)] = true;
                                cpt++;
                            }
                        }
                    }
                }
                document.getElementById("hackingTry").innerHTML = cpt + " good letters"; //give an hint
                this.life--; // loose a life
                document.getElementById("hackingScore").innerHTML = this.life; //display life

                if (this.life < 1) this.alert("ACCESS REFUSED", "Wrong password.", function () {
                    // Put here what happen when access is refused and user push "ok" button
                    //savegame.reset_game('user_save');
                    //GAME OVER
                });
            }
        }
    }

    /****** Prototype to destroy div directly (used for alert boxe) ******/
    Element.prototype.remove = function () {
        this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }




    /*
     * GAME ZONE
     */

    hacking = new HackingGame(); // Init game

    //hacking.alert("Initialisation","Je vais t'expliquer comment ça fonctionne ce jeu trop bien de la life of the dead world #Kevin"); //call an alert boxe

    hacking.password = "KILL"; //Set the good password

    hacking.alert("Bonjour " + user.name, "Les règles du jeu sont simples : vous devez trouver le mot de passe en 6 tentatives maximales. La console vous avertira de la similiarité du mot de passe au niveau de l'en-tête (good letters). Attention, au bout de 6 tentatives échouées, votre processeur pourrait bien rendre l'âme. À vos risques et périls ! Bonne chance !");

    hacking.write(["Welcome to ROBCO Industries (TM) Teralink",
			   "Password Required",
			   "-------------------------------------",
			   "Attempts Remaining : [SCORE] - [TRY] -",
			   "-------------------------------------",
			   // Change words as wish
			   "0x9430  " + hacking.encode("SHOT"),
			   "0x943C  " + hacking.encode("KILL"),
			   "0x9448  " + hacking.encode("HURT"),
			   "0x9454  " + hacking.encode("SELL"),
			   "0x9460  " + hacking.encode("GIVE"),
			   "0x946C  " + hacking.encode("SURE"),
			   "0x9478  " + hacking.encode(""),
			   "0x9484  " + hacking.encode("EAR"),
			   "0x9490  " + hacking.encode("SENT"),
			   "0x949C  " + hacking.encode(""),
			   "0x94A8  " + hacking.encode("FIRE"),
			   "0x943C  " + hacking.encode("GLOW"),
			   "0x94B4  " + hacking.encode("WEEK"),
			   "0x94C0  " + hacking.encode("NOSE"),
			   "0x94CC  " + hacking.encode("ONES"),
			   "0x94D8  " + hacking.encode("DEATH"),
			   "0x94E4  " + hacking.encode(""),
			   "0x94F0  " + hacking.encode("DARK"),
			   "0x9408  " + hacking.encode("GLOOM"),
			   "0x9414  " + hacking.encode("BOOM"),
			   "0x9420  " + hacking.encode("WEIGHT")
			  ],

        function () {
            hacking.setWord();
            hacking.setScore();
        }); // build dynamic screen

}