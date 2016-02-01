//console.clear();
$.histoire = $.el('.story');
$.pad = $.el('.questions');
//var padding = window.getComputedStyle($.histoire).paddingTop;
//padding = parseInt(padding.match(/\d/g).join(''));

var current_act = data.act_2;

function render(event) {
    //cleaning previous answers
    $.pad.querySelector('ul').innerHTML = "";
    //pushing story's text in the div
    $.histoire.innerHTML += '<p>' + event.question + '</p>';
    //scroll to the bottom of the div
    $.histoire.scrollTop = $.histoire.scrollHeight;
    //iterate trought players
    event.choix.forEach(function (choice) {
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
            text(choice.text)
        }

        $.commands = $.pad.querySelectorAll('ul li a');

    });
    // setting onclick to lead to the right event, on each link
        [].forEach.call($.commands, function (elem) {
        elem.addEventListener('click', function () {
            //call the render function by getting data event attribute
            render(current_act[this.getAttribute('data-event')]);
        });
    });

    if (event.hasOwnProperty('timer')) {
        var timer_DOM = '<div class="timer"><span></span></div>';
        var time_left = event.timer;
        var random = parseInt(Math.random() * $.pad.querySelectorAll('li a').length);

        $.pad.innerHTML += timer_DOM;

        var tic_toc = setInterval(function (e) {
            time_left--;
            //display time //Yay there is prefix
            $.pad.querySelector('.timer span').style.webkitTransform = ' scale(' + (time_left / event.timer) + ',1) translate3D(0,0,0)';
            $.pad.querySelector('.timer span').style.msTransform = ' scale(' + (time_left / event.timer) + ',1) translate3D(0,0,0)';
            $.pad.querySelector('.timer span').style.transform = ' scale(' + (time_left / event.timer) + ',1) translate3D(0,0,0)';

            if (time_left === -1) {
                //if time is up, we simulate a click on a random answer
                //simulating click like that // code can be improved
                $.pad.removeChild($.el('.timer'))
                render(current_act[$.commands[random].getAttribute('data-event')]);

                //Stop timer
                clearInterval(tic_toc);
            }

        }, 1000)
    }
};






//render test
render(current_act.a2_0);