$.histoire = $.el('.story');
$.pad = $.el('.questions');
var current_act = data.act_2;

function render(event) {

    //cleaning previous answers
    $.pad.querySelector('ul').innerHTML = "";
    //pushing story's text in the div
    $.histoire.innerHTML += '<p>' + event.question + '</p>';
    //scroll to the bottom of the div
    $.histoire.scrollTop = $.histoire.scrollHeight;

    //iterate trought players
    event.choix.forEach(function (index) {

        //link function generator
        var text = function (content) {
            return $.pad.querySelector('ul').innerHTML += '<li><a href="#" data-event="' + index.data_event + '">' + content + '</a></li>';
        };



        // if this is narration , there could be only one choice for the player --> skip the dialogue
        if (index.naration) {
            // push an arrow who lead to the following sibling event
            text('&gt')
            $.pad.querySelector('li').classList.add('arrow_naration')
        } else {
            // push all choices
            text(index.text)
        }
    });
    // setting onclick to lead to the right event, on each link
        [].forEach.call($.pad.querySelectorAll('ul li a'), function (elem) {
        elem.addEventListener('click', function () {
            //call the render function by getting data event attribute
            render(current_act[this.getAttribute('data-event')]);
        });
    });
};
render(current_act.a2_0);