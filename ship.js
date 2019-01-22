//This is the constructor for a player-controlled ship
function Ship(pos)
{
	this.collider = new Collider("polygon");
	this.collider.setVertices([
		new Vector(/*...*/),
		new Vector(/*...*/),
		new Vector(/*...*/),
	]);
	
	this.move = function()
	{
		//...
	}
	
	this.onCollide = function(gameObject)
	{
		//...
	}
}