let angle = 45;
let pointer_radius = 20;
let direction_right = true;

let cl_transparent = 'rgba(0, 0,0,0)';
let cl_coords = 'rgb(100, 100, 100)';
let cl_pointer = 'rgb(15, 75, 20)';
let cl_rotation_right = 'rgb(140, 200, 50)';
let cl_rotation_left = 'rgb(50, 170, 200)';

let turtle;

function preload() {
  turtle = loadImage('turtle.png');
}


function setup() {
  createCanvas(400, 400);
	angleMode(DEGREES);
  mouseX = width/2;
  mouseY = height/2;
}

function draw() {
  background(cl_transparent);
  clear();
	drawRotation();
	drawCoords();
	drawTurtoise();
	drawText();
	drawPointer();
}

function drawTurtoise() {
	push();
	translate(width/2, height/2);
	rotate(angle);

	// direction
	stroke(cl_pointer);
  strokeWeight(2);
	line(0, 0, 0, -width);
	noStroke();

	// turtle
  image(turtle, - turtle.width/2, - turtle.height/2);

	pop();
}

function drawCoords() {
	push();
	stroke(cl_coords);
  strokeWeight(2);
	line(50, height/2, width - 50, height/2);
	line(width/2, 50, width/2, height - 50);
	pop();
}

function drawText() {
  let angle_right = (angle < 0) ? 360 + angle : angle;
  let text_right = `right(` + Math.round(angle_right) + ')';

  let angle_left = 360 - angle_right;
  let text_left = `left(` + Math.round(angle_left) + ')';

  textSize(26);
	textAlign(CENTER);

  if (direction_right) {
		text(text_right + '', width/2, height - 20);
  } else {
    text(text_left + '', width/2, height - 20);
  }
}

function drawRotation() {
	push();
	translate(width/2, height/2);
	noStroke();

  if (direction_right) {
    fill(cl_rotation_right);
    arc(0, 0, 2*width/3, 2*width/3, -90, angle-90);
  } else {
    fill(cl_rotation_left);
    arc(0, 0, 2*width/3, 2*width/3, -90-(360 - angle), -90);
  }
	pop();
}

function drawPointer() {
	push();
	noStroke();
	fill(cl_pointer);
	ellipse(mouseX, mouseY, pointer_radius, pointer_radius);
	pop();
}

function mouseMoved() {
	let x = mouseX - 200;
	let y = 200 - mouseY;
	angle = acos(y / Math.sqrt(x*x + y*y));
	if (x < 0) angle = -angle;
}

function mouseClicked() {
  direction_right = !direction_right;
}