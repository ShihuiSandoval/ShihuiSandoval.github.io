var c =0;
var i =0;
var j = 0;
var david;
function preload(){
  david = loadImage("david.png");
}
function setup() {
  var canvas = createCanvas(window.innerWidth/2,window.innerHeight/2);
  canvas.style("width","100%");
  canvas.style("height","100%");
  canvas.position(0,0);
  background(255);
}

function draw(){

  colorMode(HSB);
  
  noStroke();
  
  for(i=0;i<width;i+=10){
    for(j=height*0.3;j<height*0.7;j+=10){
      fill(c%255,65,100);
      rect(i,j,10,10);
      c+= mouseX / map(mouseY, 0, height, 6, 12);
    }
  }
  var scale = width / david.width;
  image(david, 0, 0, david.width*scale, david.height*scale);
}
