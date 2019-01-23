//This is the document ready function. It will be called as soon as the page loads.
$(document).ready(function()
{
	console.log("page loaded");
	
	//initialize game
	var game = new Game($("#canvas")[0]);
	game.init();
});
