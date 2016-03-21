var bar = document.querySelector('.catch_bus .bar');
var title_motivation = document.querySelector('.catch_bus .title_motivation');
var bar_width = 1;
var main = window.setInterval(function () {
    downScale();
    clampBar();
    colorBar();
}, 1);
iterateKeyboard();

function downScale() {
    bar_width -= 0.001;
    bar.style.transform = 'scaleX(' + bar_width + ')';
}

function clampBar() {
    if (bar_width < 0) {
        bar_width = 0;
        clearInterval(main);
        console.log('End');
    }
    if (bar_width > 1) {
        clearInterval(main);
        console.log('You won');
    };
}

function colorBar() {
    if (bar_width >= 0.7) {
        title_motivation.innerHTML = '<h2 class=\'green\'>Vous êtes au top !</h2>'
        bar.style.backgroundColor = 'green';
    } else if (bar_width < 0.7 && bar_width >= 0.4) {
        title_motivation.innerHTML = '<h2 class=\'yellow\'>Vous ralentissez !</h2>'
        bar.style.backgroundColor = 'yellow';
    } else if (bar_width < 0.4 && bar_width >= 0.2) {
        title_motivation.innerHTML = '<h2 class=\'orange\'>Plus vite !</h2>'
        bar.style.backgroundColor = 'orange';
    } else if (bar_width < 0.2 && bar_width >= 0.01) {
        title_motivation.innerHTML = '<h2 class=\'red\'>ALLEZ PLUS VITE !</h2>'
        bar.style.backgroundColor = 'red';
    } else {
        title_motivation.innerHTML = '<h2 class=\'red\'>FIN</h2>'
        bar.style.backgroundColor = 'black';
    }
}

function iterateKeyboard() {
    window.addEventListener('keypress', function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
        case 102:
            bar_width += 0.02;
            break;
        case 106:
            bar_width += 0.03;
            break;
        case 112:
            bar_width = 1.01;
            console.log('PAUSE');
            break;
        default:
            break;
        }
    });
}