var savegame = {};
var dtExpire = new Date();
var user = "none";
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
    setCookie(name, "", -1);
}


if (document.cookie.indexOf("user_save") >= 0) { //detect the cookie we want
    //DEFINE VARIABLE HERE
    user = savegame.get_save('user_save');
    if (user == "none") {
        document.write("empy cookie !");
    } else {
        user = savegame.get_save('user_save');
        document.write('cookie detected : ' + document.cookie + '<br>' + user);
    }

} else {
    // set a new cookie
    document.write(' no cookies ! ');
    user = savegame.create_save('user_save', {
        exist: true,
    }, 7);
    user = {
        exist: true,
    };
    document.write('new cookie : ' + document.cookie);
}