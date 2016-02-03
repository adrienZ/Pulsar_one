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


    console.log(document.body.className);
});