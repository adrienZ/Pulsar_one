//user.game = 'intro';

if (user.game !== 'intro') {
    console.log('ENLEVE LE TOKEN');
    data = update_data(user.name);
}




if (user.game === "prologue") {
    if (typeof current_act === 'undefined') {
        console.log('on vient dun prologue');
        var current_act = data['act_' + user.new];
    }
    render_prologue(current_act.prologue);

} else if (user.game === 'intro') {
    current_act = data.act_1;
    render_intro();
} else if (user.game === 'end') {
    current_act = data['act_' + user.game[user.game.length - 1]]

} else if (user.game[0] === 'a') {
    window.addEventListener('load', function () {

        console.log('hey a frendly non-buggy event !');
        current_act = data['act_' + user.game[1]];
        render(current_act[user.game]);
    });
} else {
    alert(' UNDEFINED');
    document.location = '/';
}



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

$.el('.ui-panel #fonts_change').addEventListener('click', function () {

    if ($.histoire.classList.contains('serif')) {
        $.histoire.classList.remove('serif');
        $.histoire.classList.add('sans-serif');
    } else if ($.el('.story').classList.contains('sans-serif')) {
        $.histoire.classList.remove('sans-serif');
        $.histoire.classList.add('serif');
    }
});