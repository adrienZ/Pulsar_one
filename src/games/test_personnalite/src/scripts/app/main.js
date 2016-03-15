var container = document.querySelector('.container');
var windowsPanel = document.querySelector('.windows-panel');
var title = windowsPanel.querySelector('h1');
var subTitle = windowsPanel.querySelector('h2');
var coreGame = windowsPanel.querySelector('.core-game');


window.addEventListener('keydown', function(e){
	if(e.keyCode==32){
		container.classList.toggle('blur');
		windowsPanel.classList.toggle('animation');
		title.classList.toggle('animation');
		subTitle.classList.toggle('animation');
		coreGame.classList.toggle('animation');
	}
});