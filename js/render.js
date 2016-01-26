$.histoire = $.el('.story');
$.pad = $.el('.questions');


function render(event) {

    //cleaning previous answers
    $.pad.querySelector('ul').innerHTML = "";
    //pushing story's text in the div
    $.histoire.innerHTML += '<p>' + event.question + '</p>';

    //iterate trought players
    event.choix.forEach(function (index) {
        // if this is narration , there could be only one choice for the player --> skip the dialogue
        if (index.naration) {
            // push an arrow who lead to the following sibling event
            $.pad.querySelector('ul').innerHTML += '<li><a href="#" data-event=' + index.data_event + '>&gt</a></li>';
            $.pad.querySelector('li').classList.add('arrow_naration')
        } else {
            // push all choices
            $.pad.querySelector('ul').innerHTML += '<li><a href="#" data-event="' + index.data_event + '">' + index.text + '</a></li>';
        }
    });
    // setting onclick to lead to the right event
        [].forEach.call($.pad.querySelectorAll('ul li a'), function (elem) {
        elem.addEventListener('click', function () {
            render(data.act_2[this.getAttribute('data-event')]);

        });
    });
};
render(data.act_2.a2_0);