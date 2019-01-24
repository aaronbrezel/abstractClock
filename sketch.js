function setup() {
	createCanvas(600,600); // make an HTML canvas element width x height pixels
}


function draw() {
	background(225);
	fill(255,0,0); // set color to blue
	rect(0,600,600,(second()*-1*10)); //Seconds are a blue rectangle moving up
	fill(0,255,0); //set color to green	
	rect(0,0,(minute()*10),600); //minutes are a green rectangle moving to the right
	
	var oClock
	//hour() provides military time. Value from 0-23, not 1-24
	//Below if statement re-interperates hour() output to 1-24 and on a 12 hour timescale

	if (hour()<=12) {
		fill(255, 165,0) //set color to orange-yellow when in the AM
		oClock = hour();

	}
	else {
		fill(0,0,255); //Set color to blue when in the PM
		oClock = hour()-12
	}
	
	//Draw a blue triangle based on the hour
	triangle(0,600,0,600-(50*oClock),50*oClock,600);

	//Playing with arcs, DISREGUARD//
	/*var secondHand = ((second()+1)/60)*TWO_PI
	console.log(second())
	if (secondHand < TWO_PI){
		arc(300, 900, 100, 100, PI+PI/2, (PI+PI/2)+secondHand, PIE);
	}
	else {
		console.log("TWO PI")
		ellipse(300,900,100,100)
	}	

	arc(300,1100, 100,100, PI+PI/2,PI, PIE)
	*/
	
}
