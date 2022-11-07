var speed = 0;
var prevSpeed = 0;
var currentScale = 0;

function Increase() {
	// body...
	if(speed < 180)
	{
		speed = speed + 10;
		addClass();
		currentScale  = currentScale + 1;
		changeActive();
		changeSpeed()
	}
}

function Decrease()
{
	if(speed > 0) 
	{
		speed = speed - 10;
		addClass()
		changeActive();
		currentScale  = currentScale - 1;
		changeSpeed()
	}

}

function addClass()
{
	let newClass = "speed-" + speed;
	let prevClass = "speed-" + prevSpeed;
	let el = document.getElementsByClassName("arrow-wrapper")[0];
	if(el.classList.contains(prevClass))
	{
		el.classList.remove(prevClass);
		el.classList.add(newClass);
	}
	prevSpeed = speed;
}

function changeActive()
{
	let tempClass = "speedometer-scale-" + currentScale;
	let el = document.getElementsByClassName(tempClass)[0];
	el.classList.toggle("active");
}

function changeSpeed() {
	// body...
	let el = document.getElementsByClassName('km')[0];
	el.innerText = speed;
}