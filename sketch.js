function setup() {
	createCanvas(600,600); // make an HTML canvas element width x height pixels
}

var count = 0

function draw() {
	background(225);
	fill(255,0,0); // set color to blue
	rect(0,600,600,(second()*-1*10)); //Seconds are a blue rectangle moving up
	fill(0,255,0); //set color to green	
	rect(0,0,(minute()*10),600); //minutes are a green rectangle moving to the right
	fill(0,0,255); //Set color to blue
	var oClock
	//hour() provides military time. Value from 0-23, not 1-24
	//Below if statement re-interperates hour() output to 1-24 and on a 12 hour timescale
	if (hour()<=12) {
		oClock = hour();

	}
	else {
		oClock = hour()-12
	}
	console.log(oClock)
	//Draw a blue triangle based on the hour
	triangle(0,600,0,600-(50*oClock),50*oClock,600);
}
