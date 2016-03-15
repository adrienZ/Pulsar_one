var user = {};
var savegame = {};
//expire date for cookies
var dtExpire = new Date();
dtExpire.setTime(dtExpire.getTime() + 3600 * 1000);


savegame.create_save = function (name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}


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


savegame.delete_save = function (name) {
    savegame.create_save(name, "", -1);
}

savegame.erase_save = function (name, datas) {
    savegame.delete_save(name);
    datas = JSON.stringify(datas);
    savegame.create_save(name, datas, 7);
    datas = JSON.parse(datas);
    savegame.get_save(name);
};

savegame.reset_game = function () {
    user.game = 'intro';
    savegame.erase_save('user_save', user);
};

if (document.cookie.indexOf("user_save") >= 0) { //detect the cookie we want
    //DEFINE VARIABLE HERE
    user = savegame.get_save('user_save');
    //restore user data as object from the cookie's strting
    user = JSON.parse(savegame.get_save('user_save'));
    if ($.el('.welcome-screen') && user.game === null) {
        $.el('.welcome-screen .menu a:nth-child(2)').classList.add('unavailable');
    }
    //console.log('cookie detected : ' + document.cookie + '<br>' + user);
    console.log('Welcome ' + user.name);


} else {
    // set a new cookie
    console.log(' no cookies ! <br>');
    //basics setup of user data
    if ($.el('.welcome-screen')) {
        $.el('.welcome-screen .menu a:nth-child(2)').classList.add('unavailable');
    }
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
    user.game = 'intro';
    user.success = [];
    //user.game = null;
    user.pulsars = 5;
    //to sting, imperative to get save in cookies, they only read strings
    user = JSON.stringify(user);
    user = savegame.create_save('user_save', user, 7);
    console.log('new cookie : ' + document.cookie);
    user = JSON.parse(savegame.get_save('user_save'));
}