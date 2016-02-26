var input;
var analyzer;

function setup() {
  createCanvas(700, 500);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  var r = map(vol, 0, 1, 100, 0);
  ellipse(width/2, height/2, r+5, r+5);
}