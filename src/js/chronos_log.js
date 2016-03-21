var character_base = document.querySelector('.characters');
var arrow_prev = document.querySelector('.prev');
var arrow_next = document.querySelector('.next');
var limit_characters = document.querySelectorAll('.characters .character');
var description_char = document.querySelectorAll('.description');
var image_char = document.querySelectorAll('.image_placeholder');
var order = 0;
var evolution_position = -100;
var evolution_offset = 0;

var background_audio = document.createElement('audio');
background_audio.setAttribute('autoplay', 'true');
background_audio.setAttribute('src', 'src/medias/background_space.mp3');
background_audio.setAttribute('loop', 'true');
background_audio.currentTime = user.continue_intro_music;
document.body.appendChild(background_audio);
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 39) {
        arrow_next.click();
    } else if (e.keyCode === 37) {
        arrow_prev.click();
    }
});






arrow_prev.addEventListener('click', function (e) {
    if (order < limit_characters.length && order <= 0) {
        order = 0;
        character_base.style.transform = 'translateX(' + evolution_position + 'vw)';
    } else {
        order--;
        character_base.style.transform = 'translateX(' + evolution_position * order + 'vw)';
        window.setTimeout(function () {
            window.setTimeout(function () {
                description_char[order].style.transform = 'translateX(' + 1.5 + 'vw)';
            }, 100)
            image_char[order].style.transform = 'translateX(' + -1 + 'vw)';
        }, 300);
    }

});
arrow_next.addEventListener('click', function (e) {
    if (order < limit_characters.length) {
        order++;
        character_base.style.transform = 'translateX(' + evolution_position * order + 'vw)';
        window.setTimeout(function () {
            window.setTimeout(function () {
                description_char[order].style.transform = 'translateX(' + -1.5 + 'vw)';
            }, 100)
            image_char[order].style.transform = 'translateX(' + 1 + 'vw)';
        }, 300);
    } else {
        character_base.style.transform = 'translateX(' + evolution_position * limit_characters.length + 'vw)';
    }

});