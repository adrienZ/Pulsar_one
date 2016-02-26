var user = {};


var savegame = {};
var dtExpire = new Date();
savegame.create_save = function (name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
dtExpire.setTime(dtExpire.getTime() + 3600 * 1000);

savegame.get_save = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


savegame.erase_save = function (name) {
    savegame.create_save(name, "", -1);
}


if (document.cookie.indexOf("user_save") >= 0) { //detect the cookie we want
    //DEFINE VARIABLE HERE
    user = savegame.get_save('user_save');
    if (user == "none") {
        ("empy cookie !");
    } else {
        user = JSON.parse(savegame.get_save('user_save'));
        //console.log('cookie detected : ' + document.cookie + '<br>' + user);
        console.log('Welcome ' + user.name);
    }

} else {
    // set a new cookie
    console.log(' no cookies ! <br>');
    user.name = "JOOOOOOOOHN Cena !";
    user.stats = {
        strenght: 0,
        perception: 0,
        stamania: 0,
        luck: 0,
        intelligence: 0,
        agility: 0,
        loyalty: 0,
    };
    user.pulsars = 5;


    user = JSON.stringify(user);
    user = savegame.create_save('user_save', user, 7);


    console.log('new cookie : ' + document.cookie);
}