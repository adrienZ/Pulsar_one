//user.game = 'intro';

if (user.game !== 'intro') {
    data = update_data(user.name);
    var background_audio = document.createElement('audio');
    if (!background_audio || !background_audio.hasOwnProperty('src')) {
        background_audio.setAttribute('loop', 'true');
        background_audio.setAttribute('autoplay', 'true');
        background_audio.src = 'src/medias/background_space.mp3';
        background_audio.currentTime = user.continue_intro_music;

        document.body.appendChild(background_audio);
        sound_fade_in(background_audio, 0.75);
    }

}

if (user.game === "prologue") {
    if (typeof current_act === 'undefined') {
        // console.log('on vient dun prologue');
        var current_act = data['act_' + user.new];

    }
    render_prologue(current_act.prologue);
    $.el('.act-name').innerHTML = 'Acte ' + current_act.prologue.number + ' - ' + current_act.prologue.title;
} else if (user.game === 'intro') {
    var background_audio = document.createElement('audio');

    background_audio.setAttribute('loop', 'true');
    background_audio.setAttribute('autoplay', 'true');
    background_audio.src = 'src/medias/background_space.mp3';
    background_audio.currentTime = user.continue_intro_music;

    document.body.appendChild(background_audio);
    sound_fade_in(background_audio, 0.75);
    current_act = data.act_1;
    render_intro();
} else if (user.game === 'end') {
    current_act = data['act_' + user.game[user.game.length - 1]]

} else if (user.game[0] === 'a') {
    window.addEventListener('load', function () {
        // console.log('hey a frendly non-buggy event !');
        current_act = data['act_' + user.game[1]];
        render(current_act[user.game]);
    });
} else {
    alert(' UNDEFINED');
    document.location = '/';
}






for (var key in user.stats) {
    $.el('.ui-panel .user-stats ul').innerHTML += '<li class=' + key + '><p>' + key + '</p><p>' + user.stats[key] + '</p></li>'
};
//display user pulsars
$.el('.ui-panel .pulsars span').innerHTML = '[' + user.pulsars + ']';

$.ui.querySelector('#mute').addEventListener('click', function () {
    if ($.ui.querySelector('#mute').className === 'muted') {
        $.ui.querySelector('#mute').className = '';
        $.ui.querySelector('#mute img').setAttribute('src', 'src/img/icons/sound.png');
        user.mute = false;
    } else {
        $.ui.querySelector('#mute').className = 'muted';
        $.ui.querySelector('#mute img').setAttribute('src', 'src/img/icons/mute.png');
        user.mute = true;
    }
    background_audio.muted = !background_audio.muted;
    savegame.erase_save('user_save', user);
});
if (user.mute)
    $.ui.querySelector('#mute').click();
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