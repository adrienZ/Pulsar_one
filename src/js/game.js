current_act = data.act_2;

//user.game = 'intro';

if (user.game === "prologue") {
    render_prologue(current_act.prologue);
} else if (user.game === 'intro') {
    render_intro();
} else if (user.game[0] === 'a') {
    console.log('hey a frendly non-buggy event !');
    current_act = data['act_' + user.game[1]];
    render(current_act[user.game]);
} else {
    alert('RED CODE : UNDEFINED');
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