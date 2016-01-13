var xt = 500;
var c = 0;
var i = 0;
var speed = 1.5;
var touch = false;
var touchTime = 0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(0);
}

function draw() {
  colorMode(HSB);
 stroke(c%255,68,100,0.5);
  line(mouseX,mouseY,i,height);
  if(i>width){
    speed = -1.5;
  }
  i = i + speed;
  
  if(i<0){
    speed = 1.5;
  }
  i = i + speed;
  
  xt += 10;
  fill(c%255,68,100);
  ellipse(mouseX,mouseY,3,3);
  c+=1;
}

function reset(){
  clear();
    background(0);
    i = 0;
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