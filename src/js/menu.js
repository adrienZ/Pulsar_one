//catch all DOM
var menu = {
    loader_screen: $.el('.loader-screen'),
    welcome_screen: $.el('.welcome-screen'),
    link: $.all('.menu > a'),
    sound_effect: $.el('.sound_effect'),
    logo_pulsar: $.el('.logo_pulsar'),
    menu_home: $.el('.menu'),
    credits: $.el('.credits'),
    background_music: $.el('.background-music audio'),
    audio: 'src/medias/sfx_click.wav',
}


//loader disapear when page is loaded
window.addEventListener('load', function () {
    window.setTimeout(function () {
        menu.background_music.play();
        menu.loader_screen.classList.toggle('hide');
        menu.welcome_screen.classList.toggle('hide');
    }, 500);

});


//new game
menu.link[0].addEventListener('click', function () {
    //create new savegame
    user.stats = {
        strenght: 0,
        perception: 0,
        stamania: 0,
        luck: 0,
        intelligence: 0,
        agility: 0,
        loyalty: 0,
    };
    user.game = 'intro';
    user.success = [];
    user.name = null;
    user.important_decisions = [];
    user.pulsars = 5;
    savegame.erase_save('user_save', user);
    //intro animation
    menu.menu_home.classList.add('finished_down');
    menu.logo_pulsar.classList.add('finished_up');
    menu.credits.classList.add('finished-fade');
    menu.welcome_screen.classList.add('scale_exit');
    menu.background_music.innerHTML = "";

    //redirect to game at the end of the animation
    window.setTimeout(function () {
        user.continue_intro_music = menu.background_music.currentTime;
        savegame.erase_save('user_save', user);
        window.location = 'template.html';
    }, 1500);

});

//each links beep when onlcik
        [].forEach.call(menu.link, function (link, index) {
    link.addEventListener('click', function () {
        var audio = new Audio(menu.audio);
        audio.play();
    });
});