var i = 1000;
var xt = 10000;
var touch = false;
var c = 0;
var touchTime = 0;
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(55,55,55);
}

function draw() {
  if(touch){
    stroke(255);
    strokeWeight(2);
    //noStroke();
   //fill(random(255),random(255),random(255),10);
   colorMode(HSB);
   
   fill(c%255, 65,100, 0.1);
  //noFill();
   //fill(162,0,255,10);
   if(i > 0)
   i = i-1;
   tint(255, 10);
    ellipse(mouseX+map(noise(xt), 0, 1, 50, 100),mouseY,i,i);
    xt+=0.05;
    c++;
  }
}
function reset(){
  clear();
    colorMode(RGB);
    background(55,55,55);
    i = 1000;
    touch = false;
}
function touchStarted(){
  if(millis() - touchTime < 300){
    //double touches reset
    reset();
  }
  else{
    touchTime = millis();
  }
}
function touchMoved(){
  touch = true; 
}