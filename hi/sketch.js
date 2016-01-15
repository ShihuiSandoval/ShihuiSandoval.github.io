function setup(){
  createCanvas(window.innerWidth,window.innerHeight,WEBGL);
}

function draw(){
  background(146,251,239);
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  
  ambientLight(40);
  directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
  pointLight(0, 0, 200, locX, locY, 0);
  pointLight(200, 200, 0, -locX, -locY, 0);
  
  push();
  translate(-width/2, -height/2);
  for(var i = 0; i < width; i+=60){
    for(var j = 0; j < height; j+=60){
      push();
      translate(i,j,0);
      
      rotateX(mouseX * 0.01);
     rotateY(mouseY* 0.01);
     //sphere(10,10);
      box(3,3,100);
      pop();
    }
  }
  pop();
}