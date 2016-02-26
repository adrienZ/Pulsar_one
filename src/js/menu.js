var menu = {
    loader_screen: $.el('.loader-screen'),
    welcome_screen: $.el('.welcome-screen'),
    link: $.all('.menu > a'),
    sound_effect: $.el('.sound_effect'),
    logo_pulsar: $.el('.logo_pulsar'),
    menu_home: $.el('.menu'),
    credits: $.el('.credits'),
    background_music: $.el('.background-music'),
}



window.addEventListener('load', function () {
    menu.loader_screen.classList.toggle('hide');
    menu.welcome_screen.classList.toggle('hide');
});

menu.link[0].addEventListener('click', function () {
    menu.sound_effect.innerHTML = "<audio autoplay src=\"src/medias/sfx_click.wav\"></audio>";
    menu.menu_home.classList.add('finished_down');
    menu.logo_pulsar.classList.add('finished_up');
    menu.credits.classList.add('finished-fade');
    menu.welcome_screen.classList.add('scale_exit');
    menu.background_music.innerHTML = "";
});
menu.link[1].addEventListener('click', function () {
    menu.sound_effect.innerHTML = "<audio autoplay src=\"src/medias/sfx_click.wav\"></audio>";
});
menu.link[2].addEventListener('click', function () {
    menu.sound_effect.innerHTML = "<audio autoplay src=\"src/medias/sfx_click.wav\"></audio>";
});