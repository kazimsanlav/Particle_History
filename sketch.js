var particles = [];
var canvas, button1, button2;
let israinbow = false;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.mouseClicked(addMore);
	button1 = createButton('rainbow');
	button1.position(windowWidth/2+20, 20);
	button1.mouseClicked(rainbow);
	button2 = createButton('reset');
	button2.position(windowWidth/2-60, 20);
	button2.mouseClicked(reset);

	//style buttons
	button1.style('background-color', 'purple');
	button1.style('color', '#fff');
	button2.style('background-color', 'red');
	button2.style('color', '#fff');
}

function draw() {
	background(0);

	for(var par of particles){
		par.update();
		par.show();
	}

}

function addMore(){
	particles.push(new Particle(mouseX,mouseY));
}

function windowResized() {
	// print('resized!');
	resizeCanvas(windowWidth, windowHeight);
	background(0);
	button1.position(windowWidth/2+20, 20);
	button2.position(windowWidth/2-60, 20);
}

function reset(){
	particles = [];
}

function rainbow(){
	israinbow = !israinbow;
}

