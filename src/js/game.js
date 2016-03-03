user.set_name = function (new_name) {
    user.name = new_name;
    user = JSON.stringify(user);
    savegame.delete_save('user_save');
    savegame.create_save('user_save', user, 7);
    user = JSON.parse(user);

}
var current_act;
//the user is begining a new game
if (user.game === 'intro') {
    current_act = data.act_1;
    // EXEPTION --> citatation appears first , but i cant render it so i use an extra div
    $.el('section.new').style.opacity = '1';
    $.el('section.new').style.zIndex = '2';
    window.setTimeout(function () {
        $.el('section.new').remove();
        $.el('section.prologue').style.zIndex = '-1';

    }, 4000);
    //remove the extra div lead to the input part where the player have to give his name

    $.el('input').addEventListener('keyup', function (e) {
        //UX for the input
        if ($.el('input').classList.contains('required')) {
            $.el('input').classList.remove('required');
        }
    });
    window.addEventListener('keyup', function (e) {
        //if he press enter
        if (e.keyCode === 13) {
            //check if the input is empty
            if ($.el('input').value.length === 0) {
                $.el('input').classList.add('required');
            } else {
                // #badCode
                //intro text , without the render function
                user.set_name($.el('input').value);
                $.el('.intro p:first-of-type').style.animationPlayState = 'running';
                $.el('.intro br').style.animationPlayState = 'running';
                $.el('.intro p:last-of-type').style.animationPlayState = 'running';
                $.el('.intro input').classList.add('confirmed', 'translate');
                $.el('.intro input').setAttribute('disabled', '');
                $.el('.intro input').setAttribute('value', user.name);
                $.el('.intro .container').innerHTML += '<p class="translate"> Votre histoire est sur le point de trouver un nouveau tournant. Ce n’est pas terminé. <br> Réveillez-vous.</p>';


                //now that the name is set , we remove the input part and render the first event
                window.setTimeout(function () {
                    //get animation duration
                    var fade_out_delay = window.getComputedStyle($.el('.intro .container')).getPropertyValue('animation-duration').charAt(0);

                    $.el('.intro .container').style.animationPlayState = 'running';
                    window.setTimeout(function () {
                        $.el('section.prologue').style.zIndex = '-1';
                        show_prologue(current_act.prologue);
                    }, fade_out_delay * 1000);
                }, 2000);
            }
        }
    });
}

// if the user has pass the intro
else {
    //remove extra div
    $.el('section.intro').remove();

    //set up for the UI//
    //display user stats
    for (var key in user.stats) {
        $.el('.ui-panel .user-stats ul').innerHTML += '<li><p>' + key + '</p><p>' + user.stats[key] + '</p></li>'
    };
    //display user pulsars
    $.el('.ui-panel .pulsars span').innerHTML = '[' + user.pulsars + ']';

    //Full screen mode
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