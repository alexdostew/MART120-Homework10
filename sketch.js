var movementFirst;
var movementSecond;
var movementThird;
var movementFourth;
var movementFifth;
var movementSixth;

var hatPosStartx = 200;
var hatPosStarty = 130;
var hatPosx = hatPosStartx;
var hatPosy = hatPosStarty;

var headPosStartx = 200;
var headPosStarty = 200;
var headPosx = headPosStartx;
var headPosy = headPosStarty;

var eyeLeftPosStartx = 160;
var eyeLeftPosStarty = 185;
var eyeLeftPosx = eyeLeftPosStartx;
var eyeLeftPosy = eyeLeftPosStarty;

var eyeRightPosStartx = 240;
var eyeRightPosStarty = 185;
var eyeRightPosx = eyeRightPosStartx;
var eyeRightPosy = eyeRightPosStarty;

var bodyPosStartx = 200;
var bodyPosStarty = 400;
var bodyPosx = bodyPosStartx;
var bodyPosy = bodyPosStarty;

var armPosStartx = 80;
var armPosStarty = 450;
var armPosx = armPosStartx;
var armPosy = armPosStarty;

var fontSize = 32;
var fontIncrease = 1;

function setup() {
  createCanvas(400,400);
  movementFirst = Math.floor(Math.random() * 10) + 1;
  movementSecond = Math.floor(Math.random() * 10) + 1;
  movementThird = Math.floor(Math.random() * 10) + 1;
  movementFourth = Math.floor(Math.random() * 10) + 1;
  movementFifth = Math.floor(Math.random() * 10) + 1;
  movementSixth = Math.floor(Math.random() * 10) + 1;
}

function draw() {
  background('darkgreen');
  fill('rgba(0,255,0, 1)');
  ellipse(armPosx,armPosy,80,260); //Left Arm
  ellipse(320,450,80,260); //RightArm
  ellipse(bodyPosx,bodyPosy,250,260); //body
  fill('tan');
  ellipse(headPosx,headPosy,150,180); //head
  fill('white');
  rect(140,175,40,20); //Left Eye
  rect(220,175,40,20); //Right Eye
  line(180,185,220,185); //Glasses Rim
  strokeWeight(10);
  point(eyeLeftPosx,eyeLeftPosy); //Left Pupil
  point(eyeRightPosx,eyeRightPosy); //Right Pupil
  strokeWeight(1);
  fill('red');
  triangle(150,240,200,260,250,240); //Mouth
  fill('brown');
  ellipse(hatPosx,hatPosy,150,50); //Hat
  fill('white');
  textSize(fontSize);
  text('Myself in a Hat',100,50);
  textSize(12);
  text('Alexander Stewart',280,260);


  if (hatPosy >= hatPosStarty || hatPosy <= 25) {
    movementFirst *= -1;
  }
  hatPosy += movementFirst;

  if (headPosy >= headPosStarty || headPosy <= headPosStarty - 10) {
    movementSecond *= -1;
  }
  headPosy += movementSecond;

  if (eyeLeftPosy >= eyeLeftPosStarty + 5 || eyeLeftPosy <= eyeLeftPosStarty - 5) {
    movementThird *= -1;
  }
  eyeLeftPosy += movementThird;
  eyeLeftPosx += movementThird;

  if (eyeRightPosy >= eyeRightPosStarty + 5 || eyeRightPosy <= eyeRightPosStarty - 5) {
    movementFourth *= -1;
  }
  eyeRightPosy += movementFourth;
  eyeRightPosx -= movementFourth;

  if (bodyPosx >= bodyPosStartx + 50 || bodyPosx <= bodyPosStartx - 50) {
    movementFifth *= -1;
  }
  bodyPosx += movementFifth;

  if (armPosx >= armPosStartx + 50 || armPosx <= armPosStartx - 50) {
    movementSixth *= -1;
  }
  armPosx += movementSixth;

  if (fontSize <= 32 || fontSize >= 37) {
    fontIncrease *= -1;
  }

  fontSize += fontIncrease;
}
