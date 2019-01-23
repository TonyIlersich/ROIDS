const ASTEROID_BUFFER_SIZE = 50;

function Game(canvas)
{
	console.log("game constructor called");
	
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	
	this.gameObjects = [];
	this.asteroids = [];
	
	this.spawnPlayers = function()
	{
		//...
	}
	
	this.spawnAsteroids = function()
	{
		//TODO create n asteroids, add each to both this.gameObjects and this.asteroids.
		for (var i = 0; i < ASTEROID_BUFFER_SIZE; i++)
		{
			//...
		}
		//...
	}
	
	this.init = function()
	{
		this.spawnPlayers();
		this.spawnAsteroids();
		
		//...
	}
	
	this.respawnAsteroids = function()
	{
		//TODO find uninitialized asteroids in this.asteroids, reinitialize.
		//...
	}
	
	//This function moves each game object.
	this.move = function()
	{
		for (var gameObject of this.gameObjects)
		{
			gameObject.move();
		}
	}
	
	//This function checks collisions between each game object, and calls the collide event handler if necessary.
	this.checkCollisions = function()
	{
		//loop through each pair of game objects
		for (var i = 0; i < this.gameObjects.length; i++)
		{
			for (var j = 0; j < this.gameObjects.length; j++)
			{
				//grab game objects
				var gameObject0 = this.gameObjects[i];
				var gameObject1 = this.gameObjects[j];
				
				//if the game objects are different and colliding, call the collide event handler
				if (i != j &&
					gameObject0.collider.checkCollide(gameObject1.collider))
				{
					gameObject0.onCollide(gameObject1);
				}
			}
		}
	}
	
	//This function is called every frame the game is running
	this.update = function()
	{
		//get the time this function started
		var frameStart = Date.now();
		
		//...
		
		//update game objects
		this.respawnAsteroids();
		this.move();
		this.checkCollisions();
		
		//...
		
		//get the total time this function has been running
		var frameDeltaTime = Date.now() - frameStart;
		console.log("dt: " + frameDeltaTime);
	}
}
