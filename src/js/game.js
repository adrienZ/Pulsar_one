user.set_name = function (new_name) {
    user.name = new_name;
    user = JSON.stringify(user);
    savegame.delete_save('user_save');
    savegame.create_save('user_save', user, 7);
    user = JSON.parse(user);

}

if (user.game === 'intro') {
    console.log('intro');
    $.el('input').addEventListener('keyup', function (e) {
        if ($.el('input').classList.contains('required')) {
            $.el('input').classList.remove('required');

        }
    });
    window.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            if ($.el('input').value.length === 0) {
                $.el('input').classList.add('required');
            } else {
                user.set_name($.el('input').value);
                $.el('.intro p:first-of-type').style.animationPlayState = 'running';
                $.el('.intro br').style.animationPlayState = 'running';
                $.el('.intro p:last-of-type').style.animationPlayState = 'running';
                $.el('.intro input').classList.add('confirmed', 'translate');
                $.el('.intro input').setAttribute('disabled', '');
                $.el('.intro input').setAttribute('value', user.name);
                $.el('.intro .container').innerHTML += '<p class="translate"> Votre histoire est sur le point de trouver un nouveau tournant. Ce n’est pas terminé. </p> <br> <p class="translate">Réveillez-vous.</p>'

            }
        }
    });
} else {
    $.el('section.intro').remove();
    for (var key in user.stats) {
        $.el('.ui-panel .user-stats ul').innerHTML += '<li><p>' + key + '</p><p>' + user.stats[key] + '</p></li>'
    };
    $.el('.ui-panel .pulsars span').innerHTML = '[' + user.pulsars + ']';




    //render test
    setTimeout(function () {
        render(current_act.a2_0)
    }, 1000);


    $.el('.bottom-bar a').addEventListener('click', function () {
        console.log(document.body.children);
        document.body.children[0].style.transform = "translate3D(0,-100px,0)";
        document.body.children[0].querySelector('.bottom-bar').style.transform = "translate3D(0,-240px,0)";
        document.body.children[0].querySelector('.bottom-bar').style.width = "100%";

    });

    $.el('.ui-panel #fullscreen').addEventListener('click', function () {
        if (document.body.classList.contains('expand')) {
            document.body.classList.remove('expand');
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        } else {
            document.body.classList.add('expand');
            // NOT ONLY FULLSCREEN THE VIDEO BUT THE ENTIER PLAYER
            if (document.body.requestFullscreen) {
                document.body.requestFullscreen();
            } else if (document.body.mozRequestFullScreen) {
                document.body.mozRequestFullScreen();
            } else if (document.body.webkitRequestFullScreen) {
                document.body.webkitRequestFullScreen();
            } else if (document.body.msRequestFullscreen) {
                document.body.msRequestFullscreen();
            }
        }
    });


}