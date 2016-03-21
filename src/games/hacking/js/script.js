function HackingGame(){
	/**** GAME PARAMETERS ****/
	this.game = document.getElementById("hackingZone");
	this.delay = 10; //millisecond between each letters
	this.password = ""; // password required
	this.life = 5; //Number of life
	this.randomCaracs = "^¨$£¤%*!§/:.;?,&~#'{([-|`_\^@)]=}+°<>"; //Random caracters
	this.randomLength = 30; // length of random line

	this.wordList = []; // list of all word you've pushed through encode function

	/* Create an alert box */
	this.alert = function(title, msg, callback){
		var div = document.createElement("div"),
			h1 = document.createElement("h1"),
			p = document.createElement("p"),
			a = document.createElement("a");

		h1.innerHTML = title;
		p.innerHTML = msg;
		a.innerHTML = "OK";

		div.className = "alert";
		a.className = "button";

		a.onclick = function(){
			div.remove();
		}

		div.appendChild(h1);
		div.appendChild(p);
		div.appendChild(a);
		this.game.appendChild(div);

		if(typeof callback == "function") callback();
	}
	/* Write a simple line */
	this.writeLine = function(txt, callback){
		var p = document.createElement("p"),
			i = 0;

		this.game.appendChild(p);

		var timer = setInterval(function(){
			p.innerHTML += txt.charAt(i);
			i++;
		}, this.delay);
		setTimeout(function(){
			clearInterval(timer);
			if(typeof callback == "function") callback();
		}, this.delay*txt.length);
	}
	/* Write a lot of line, need to be in an array */
	this.write = function(txt, callback){
		if(txt.length == 0) return false;
		else if(typeof txt == "string") txt = [txt];
		var that = this;
		that.writeLine(txt[0]);
		var total = 0;

		for(var i = 1; i < txt.length; i++){
			total += that.delay*txt[i-1].length;
			setTimeout((function(i) {
				return function() {
					that.writeLine(txt[i]);
				};
			})(i), total);
		}

		setTimeout(function(){
			if(typeof callback == "function") callback();
		}, total+this.delay*txt[i-1].length);
	}
	/* Make clickable word */
	this.setWord = function(){
		var nodes = this.game.childNodes;
		for(var j = 0; j<nodes.length; j++){
			for(var k = 0; k<this.wordList.length; k++){
				nodes[j].innerHTML = nodes[j].innerHTML.replace(this.wordList[k], "<a onclick='hacking.try(\""+this.wordList[k]+"\")'>"+this.wordList[k]+"</a>");
			}
		}
	}
	/* Get [SCORE] and [TRY] to replace with dy dynamics tags */
	this.setScore = function(){

		var node = this.game.childNodes[3];
		console.log(node);
		$.el('#hackingZone .alert a.button').addEventListener('click', function(){
			this.remove();
		})
		node.innerHTML = node.innerHTML.replace("[SCORE]", "<span id='hackingScore'>3</span>");
		node.innerHTML = node.innerHTML.replace("[TRY]", "<span id='hackingTry'></span>");
	}
	/* Create fake line with random caract and place the selected word into it at a random place */
	this.encode = function(word){
		this.wordList.push(word);
		var p = "",
			rdm = Math.random() * (this.randomLength-word.length);
		rdm = Math.floor(rdm);
		for(var x = 0; x<this.randomLength-word.length; x++){
			if(x == rdm) p += word;
			else p += this.randomCaracs.charAt(Math.random()*this.randomCaracs.length);
		}
		return p;
	}
	/* Try to guess what could be the password */
	this.try = function(t){
		var cpt = 0,
			reg = {};

		// If you've selected the good password
		if(t == this.password){
			this.alert("ACCESS ACCEPTED", "Good password.", function(){
				// Put here what happen when access is accepted and user push "ok" button
			});
		}
		//if not
		else{
			// count how many letter are in common with the password
			for(var v = 0; v < t.length; v++){
				for(var w = 0; w < this.password.length; w++){
					if(t.charAt(v) == this.password.charAt(w)){
						if(!reg[this.password.charAt(w)]){
							reg[this.password.charAt(w)] = true;
							cpt++;
						}
					}
				}
			}
			document.getElementById("hackingTry").innerHTML = cpt + " good letters"; //give an hint
			this.life--; // loose a life
			document.getElementById("hackingScore").innerHTML = this.life; //display life

			if(this.life < 1) this.alert("ACCESS REFUSED", "Wrong password.", function(){
				// Put here what happen when access is refused and user push "ok" button
				//GAME OVER
			});
		}
	}
}

/****** Prototype to destroy div directly (used for alert boxe) ******/
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}




/*
* GAME ZONE
*/

var hacking = new HackingGame(); // Init game

//hacking.alert("Initialisation","Je vais t'expliquer comment ça fonctionne ce jeu trop bien de la life of the dead world #Kevin"); //call an alert boxe

hacking.password = "KILL"; //Set the good password

hacking.alert("Bonjour" + user.name, " [En cas de problème, actualisez la page.] Les règles du jeu sont simples : vous devez trouver le mot de passe en 6 tentatives maximales. La console vous avertira de la similiarité du mot de passe au niveau de l'en-tête (good letters). Attention, au bout de 6 tentatives échouées, votre processeur pourrait bien rendre l'âme.");

hacking.write(["Welcome to ROBCO Industries (TM) Teralink",
			   "Password Required",
			   "-------------------------------------",
			   "Attempts Remaining : [SCORE] - [TRY] -",
			   "-------------------------------------",
			   // Change words as wish
			   "0x9430  " + hacking.encode("SHOT"),
			   "0x943C  " + hacking.encode("KILL"),
			   "0x9448  " + hacking.encode("HURT"),
			   "0x9454  " + hacking.encode("SELL"),
			   "0x9460  " + hacking.encode("GIVE"),
			   "0x946C  " + hacking.encode("SURE"),
			   "0x9478  " + hacking.encode(""),
			   "0x9484  " + hacking.encode("EAR"),
			   "0x9490  " + hacking.encode("SENT"),
			   "0x949C  " + hacking.encode(""),
			   "0x94A8  " + hacking.encode("FIRE"),
			   "0x943C  " + hacking.encode("GLOW"),
			   "0x94B4  " + hacking.encode("WEEK"),
			   "0x94C0  " + hacking.encode("NOSE"),
			   "0x94CC  " + hacking.encode("ONES"),
			   "0x94D8  " + hacking.encode("DEATH"),
			   "0x94E4  " + hacking.encode(""),
			   "0x94F0  " + hacking.encode("DARK"),
			   "0x9408  " + hacking.encode("GLOOM"),
			   "0x9414  " + hacking.encode("BOOM"),
			   "0x9420  " + hacking.encode("WEIGHT")
			  ],

			  function(){ hacking.setWord(); hacking.setScore(); }); // build dynamic screen
