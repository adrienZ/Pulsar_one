var interface = {
    histoire: $.el('.story'),
        pad: $.el('.questions'),
}


function render(event) {
    interface.histoire.innerHTML += '<p>' + event.question + '</p>';
    console.log(event);
    event.choix.forEach(function (index) {
        //console.log(index);
        if (index.naration) {
            interface.pad.querySelector('ul').innerHTML += '<li><a href="#" data-event=' + index.data_event + '>&gt</a></li>';
            interface.pad.querySelector('li').classList.add('arrow_naration')
        } else {
            interface.pad.querySelector('ul').innerHTML += '<li><a href="#" data-event="' + index.data_event + '">' + index.text + '</a></li>';
        }

    });

    var answer = interface.pad.querySelectorAll('ul li a');
    for (var i = 0; i < answer.length; i++) {
        answer[i].addEventListener('click', function () {
            console.log(this.getAttribute('data-event'));
            render(data.acte_test[this.getAttribute('data-event')]);
        });
    }





    //            [].forEach.call(interface.pad.querySelectorAll('ul li a'), function (elem) {
    //            console.log(elem);
    //        }



};


render(data.acte_test.t_0);