var r;
var b;


function setup() {
 createCanvas(window.innerWidth,window.innerHeight);
 background(255);
}

function draw() {
 noStroke();
  r = map(mouseX,0,800,0,255);
  b = map(mouseY,0,600,255,0);
  fill(r,b,b);
  ellipse(mouseX,mouseY,200,200);
}

function mousePressed(){
 background(255);
}