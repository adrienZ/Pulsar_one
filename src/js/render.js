// TO DO 
//debug animation changement
//debug animation slapsh screen 
//debug intro form + fade in in p





//catch useful DOM
$.ui = $.el('.ui-panel');
$.ui.menu_icons = $.ui.querySelectorAll('.menu li');
$.histoire = $.el('.story');
$.pad = $.el('.questions');
//icon hover helper
var ui = {
    icon_help_text: ['sauvegardez votre partie', 'musique', 'son', 'plein écran'],
    skip: [],
};
        [].forEach.call($.ui.menu_icons, function (icon, index) {
    icon.addEventListener('mouseenter', function () {
        $.ui.querySelector('.menu button').innerHTML = ui.icon_help_text[index];
    });
});

var browsers = {};
browsers.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
browsers.isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+= "[object HTMLElementConstructor]"
browsers.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Internet Explorer 6-11
browsers.isIE = /*@cc_on!@*/ false || !!document.documentMode;
// Edge 20+
browsers.isEdge = !browsers.isIE && !!window.StyleMedia;
// Chrome 1+
browsers.isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
browsers.isBlink = (browsers.isChrome || browsers.isOpera) && !!window.CSS;

for (var browser in browsers) {
    if (browsers[browser])
        console.log(browser);
}


//var current_act = data.act_1;
//var current_act = data.act_1;
var skip = false;




//render(current_act.a2_0);

// all the data i need to stop the typed effect with write()
//function render
function render(event) {
    console.log(event);
    if (event.hasOwnProperty('stop_act')) {
        //current_act = data['act_' + user.game[1]];
        window.location = '/recap.html';
        return false;
    };
    user.set_progress = event.parent;

    //cleaning previous answers
    $.pad.querySelector('ul').innerHTML = "";
    //pushing story's text in the div
    write(event.question, $.histoire);



    //iterate trought players
    event.choix.forEach(function (choice) {
        //EXCEPTIONS for time travel in act_3
        if (user.game === 'a3_0') {
            switch (user.travel) {
            case 'greece':
                console.log('Selected area : ' + user.travel);;

                choice.data_event = 'a3_0';
                break;
            case 'egypt':
                choice.data_event = 'a3_1';
                break;
            case 'france':
                choice.data_event = 'a3_2';
                break;

            }
        }




        //link function generator
        var text = function (content) {
            return $.pad.querySelector('ul').innerHTML += '<li><a href="#" data-event="' + choice.data_event + '">' + content + '</a></li>';
        }; // if this is narration , there could be only one choice for the player --> skip the dialogue


        if (choice.naration) {
            // push an arrow who lead to the following sibling event
            text('&gt');
            $.pad.querySelector('li').classList.add('arrow_naration');
        } else {
            // push all choices
            text(choice.text);
        }

        if (choice.hasOwnProperty('game_over')) {
            //we may need a variable here
            $.pad.querySelector('ul').lastChild.querySelector('a').setAttribute('data-game-over', 'true');
        }
        // detect if user stats will change
        if (choice.hasOwnProperty('stats_change')) {
            //we may need a variable here
            $.pad.querySelector('ul').lastChild.querySelector('a').setAttribute('data-stats', 'true');
        }

        if (choice.hasOwnProperty('get_success')) {
            //we may need a variable here
            $.pad.querySelector('ul').lastChild.querySelector('a').setAttribute('data-success', choice.get_success);
        }
        if (choice.hasOwnProperty('pop_up')) {
            //we may need a variable here
            $.pad.querySelector('ul').lastChild.querySelector('a').setAttribute('data-pop-up', choice.pop_up);
        }
        if (choice.hasOwnProperty('change_act')) {
            $.pad.querySelector('ul').lastChild.querySelector('a').setAttribute('data-act', choice.change_act);
        }
        if (choice.hasOwnProperty('time_travel')) {
            $.pad.querySelector('ul').lastChild.querySelector('a').setAttribute('data-travel', choice.time_travel);
        }
        $.commands = $.pad.querySelectorAll('ul li a');
    });






    // setting onclick to lead to the right event, on each link
        [].forEach.call($.commands, function (elem, index) {

        elem.addEventListener('click', function () {
            $.histoire.scrollTop = $.histoire.scrollHeight;
            if (elem.getAttribute('data-act')) {
                //current_act = data['act_' + this.getAttribute('data-act')];
            }
            //call the render function by getting data event attribute

            if (elem.getAttribute('data-pop-up')) {
                create_pop_up(this.getAttribute('data-pop-up'));
            }
            if (elem.getAttribute('data-game-over')) {
                pulsar_game_over();
            }
            if (elem.getAttribute('data-travel')) {
                user.travel = elem.getAttribute('data-travel');
            }
            if (elem.getAttribute('data-success')) {
                user.success.push(data.backstory.success[this.getAttribute('data-success') - 1]);
                create_success(data.backstory.success[this.getAttribute('data-success') - 1].img);
                var trophy_sound = new Audio('src/medias/success-sound.mp3');
                trophy_sound.play();
            }

            if (elem.getAttribute('data-stats')) {


                //looping througe change, thanks to the index argument
                var abilities_targeted = event.choix[index].stats_change;


                //here we go, we iterate throught the keys to change and adds the news values, wich can negative
                Object.keys(abilities_targeted).forEach(function (capacity, val) {
                        [].forEach.call($.all('.user-stats ul li'), function (element, index) {
                        if (capacity === element.querySelector('p').innerHTML) {
                            element.querySelector('p:last-child').style.opacity = 0;

                            setTimeout(function () {
                                element.querySelector('p:last-child').innerHTML = abilities_targeted[capacity];
                                element.querySelector('p:last-child').style.opacity = '';
                            }, 300);

                        }
                    });
                });

            }
            console.log(current_act[this.getAttribute('data-event')], this.getAttribute('data-event'));
            render(current_act[this.getAttribute('data-event')]);
            // SKIP HERE / be careful with this global
            skip = true;
        });

        //if data-stats , the user's stats will be modified   

    });


    if (event.hasOwnProperty('change_img')) {
        if (browsers.isChrome || browsers.isOpera || browsers.isBlink || browsers.isOpera) {
            $.el('#encima').className = event.change_img;
            $.el('#encima').style.animationPlayState = 'running';
            var delay = window.getComputedStyle($.el('#encima')).getPropertyValue('animation-duration');
            var new_img = window.getComputedStyle($.el('#encima.' + event.change_img), ':before').getPropertyValue('background-image');

            window.setTimeout(function () {
                $.el('#fondo').style.background = new_img + ' no-repeat center center';
                $.el('#encima').style.animationPlayState = 'paused';

            }, parseInt(delay[0]) * 1000);

        } else {
            console.log('cant do the reebook effect');
            $.el('#encima').className = event.change_img;
            $.el('#encima').style.animationPlayState = 'running';
            window.setTimeout(function () {
                $.el('#fondo').style.background = new_img + ' no-repeat center center';
                $.el('#encima').style.animationPlayState = 'paused';

            }, 1000);

        }
    }

    // remove unused timers
    if ($.pad.querySelector('.timer')) {
        $.pad.querySelector('.timer').remove();
    }


    if (event.hasOwnProperty('timer')) {
        //creating timer DOM with a proper wat
        var timer_DOM = document.createElement('div');
        timer_DOM.classList.add('timer');
        timer_DOM.appendChild(document.createElement('span'));
        var time_left = event.timer;
        var random = parseInt(Math.random() * $.pad.querySelectorAll('li a').length);

        $.pad.appendChild(timer_DOM);

        var tic_toc = setInterval(function (e) {

            time_left--;
            //display time //Yay there is prefix
            $.pad.querySelector('.timer span').style.webkitTransform = ' scale(' + (time_left / event.timer) + ',1) translate3D(0,0,0)';
            $.pad.querySelector('.timer span').style.msTransform = ' scale(' + (time_left / event.timer) + ',1) translate3D(0,0,0)';
            $.pad.querySelector('.timer span').style.transform = ' scale(' + (time_left / event.timer) + ',1) translate3D(0,0,0)';

            if (time_left === -1) {
                //if time is up, we simulate a click on a random answer
                //simulating click like that // code can be improved
                $.pad.removeChild($.el('.timer'));
                render(current_act[$.commands[random].getAttribute('data-event')]);
                //Stop timer
                clearInterval(tic_toc);
            }
        }, 1000);

        // interupt timer onclick
        [].forEach.call($.commands, function (elem) {
            elem.addEventListener('click', function () {
                //call the render function by getting data event attribute
                clearInterval(tic_toc);
            });
        });
    }

};

function create_pop_up(str) {

    var pop_up_DOM = document.createElement('div');
    pop_up_DOM.classList.add('pop_up', 'notif');
    $.el('.main').appendChild(pop_up_DOM);
    var auto_destruction_delay = window.getComputedStyle($.el('.main').lastChild).getPropertyValue('animation-duration');
    $.el('.notif').innerHTML = '<img src="src/img/notif/' + str + '" width="400">';
    window.setTimeout(function () {
        $.el('.notif').remove();
    }, parseInt(auto_destruction_delay) * 1000);
}

function create_success(str) {

    var success_DOM = document.createElement('div');
    success_DOM.classList.add('pop_up', 'success');
    $.el('.main').appendChild(success_DOM);
    var auto_destruction_delay = window.getComputedStyle($.el('.main').lastChild).getPropertyValue('animation-duration');
    $.el('.success').innerHTML = '<img src="' + str + '" width="400">';
    window.setTimeout(function () {
        $.el('.success').remove();
    }, parseInt(auto_destruction_delay) * 1000);
}





function write(txt, parent) {
    console.log(txt);
    if (txt.length === 0) return false;
    else if (typeof txt === "string") {
        var content = document.createElement('p');
        parent.appendChild(content);
        // when previous text doesnt exist
        if (ui.skip.length === 0) {
            var first = {
                text: txt,
                state: false,
                first: true,
            };
            ui.skip.push(first);
        }
        var audio = null;


        var index_text = -1;
        var writing = setInterval(function () {
            // detect if user click on a arrow/answer
            setInterval(function () {
                //audio = new Audio(['http://www.hotchkiss.co.jp/sound/1.mp3']);
            }, 15);
            //audio.play(); turn down the volume xD
            if (skip == true) {
                $.histoire.scrollTop = $.histoire.scrollHeight;

                //cut typed effect on previous <p>
                if (ui.skip[ui.skip.length - 2] !== undefined) {
                    clearInterval(ui.skip[ui.skip.length - 2].interval);
                    //clear <p>
                    parent.childNodes[parent.childNodes.length - 2].innerHTML = "";
                    //fill the previous text on one shot <p>
                    parent.childNodes[parent.childNodes.length - 2].innerHTML = ui.skip[ui.skip.length - 2].text;
                    // reboot skip global
                    skip = false;
                    //else --> typed effect
                }

            } else {

                index_text++;
                content.innerHTML += txt[index_text];
            }

            if (index_text === txt.length - 1) {
                clearInterval(writing);
                $.histoire.scrollTop = $.histoire.scrollHeight;

            }
        }, 15);




        var previous = {
            text: txt,
            state: false,
            interval: writing,
            node: content,
        }
        if (ui.skip[0].hasOwnProperty(('first'))) {
            ui.skip.shift();
        }
        ui.skip.push(previous);

    }
}


function pulsar_game_over() {
    var game_over_dom = document.createElement('section');
    game_over_dom.className = "game-over";
    game_over_dom.innerHTML = '<article><h2>Fin de <span>partie<span></h2><p>Le destin a eu raison de vous.</p><a href="#">Recommencer (-2 pulsars)</a><a href="index.html">Quitter la partie</a><p class="pulars-left">Il vous reste ' + user.pulsars + ' pulsars</p></article>';
    document.body.appendChild(game_over_dom);
}