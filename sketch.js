var i = 1000;
var xt = 10000;
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(255,255,0);
}

function draw() {
 stroke(255);
  //noStroke();
 fill(random(255),random(255),random(255),10);
//noFill();
 //fill(162,0,255,10);
 if(i > 0)
 i = i-1;
  ellipse(mouseX+map(noise(xt), 0, 1, 50, 100),mouseY,i,i);
  xt+=0.05;
}
