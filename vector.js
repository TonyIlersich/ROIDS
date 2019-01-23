//This is the constructor for a vector
function Vector(x = undefined, y = undefined)
{
	this.x = x;
	this.y = y;
	
	this.vectorTo(otherVector)
	{
[		return new Vector(
			otherVector.x - this.x,
			otherVector.y - this.y);
	}
	
	this.dot(otherVector)
	{
		return
			this.x * otherVector.x +
			this.y * otherVector.y;
	}
	
	this.sqrMagnitude()
	{
		return this.dot(this);
	}
	
	this.sqrDistance(otherVector)
	{
		return
			this.vectorTo(otherVector)
				.sqrMagnitude();
	}
}