var img;
var x = 0;
var i = 50;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  x = height/2;
  background(250,181,236);
  fill(92,228,214);
  noStroke();
  rect(0,0,width,height/2);
}

function draw(){
  if((x>height+10)||(x<0)){
   fill(255);
   textSize(180);
   textAlign(CENTER);
   text("YOU WIN!!!",width/2,height/2);
  }
};

function touchStarted() {
  background(250,181,236);
  noStroke();
  if(touchY<height/2 & touchY>0){
  fill(92,228,214);
  rect(0,0,width,x);
  x = x + 10;
 }else if(touchY>height/2 & touchY<height){
   rect(0,0,width,x);
  x = x - 10;
 }
}

