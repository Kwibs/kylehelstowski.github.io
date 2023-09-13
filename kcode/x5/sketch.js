let rotateArr = new Array(15);
let counter1 = 90
let counter2 = -90
function setup() {
  createCanvas(500, 500);
  frameRate(25);
  // angleMode(DEGREES)
for (let i = 0; i < rotateArr.length; i++) {

  rotateArr[i] = new Noice(random(40),random(50),random(.25,1.5), color(0,255,255));
  // rotate2 = new Noice(30,80,0.8);
  // rotate3 = new Noice(0,-250,1.5);
}
}

function draw() {
  background(0,50,220);
  stroke(0,255,255);
  strokeWeight(2);
  for (let i = 0; i < rotateArr.length; i++) {
    rotateArr[i].rotateme();
  }
}
// function mousePressed(){
// rotateArr[int(random(10))].colorchange(color(255,0,0));
// }

class Noice{
  cx;
  cy;
  csc;
  ck;
  constructor(lx,ly,lsc,lk){
    this.cx = lx;
    this.cy = ly;
    this.csc = lsc;
    this.ck = lk;


}
  // colorchange(lk){
  // this.ck = lk;
  //
  //
  //
  //
  //
  // }
  rotateme(lx,ly){
    push();
    translate(this.cx, this.cy);
    scale(this.csc);
    translate(width/2, height/2);
    rotate(radians(counter2));
    scale(0.5);
    fill(0,90,255);
    this.RotatingCircle();
    this.makeFace();


    pop();
  }

  RotatingCircle() {

    let r = random(1);
    for (let i = 0; i < r; i++) {

      ellipse(-180, -80, 100, 40, 5);
      ellipse(-180, 100, 100, 40, 5);
      ellipse(-75, 10, 100, 40, 5);
      ellipse(-180, -80, 40, 100, 5);
      ellipse(-180, 100, 40, 100, 5);
      ellipse(-75, 10, 40, 100, 5);

      counter1++;
      counter2--;
  }
  }
  makeFace(lx,ly){
    push();
    translate(lx,ly);
  // draw a face!
  //note that is based on an origin in the top left corner
  rotate(300)
  ellipse(60, 0, 80, 40);
  ellipse(60, 0, 40, 40);
  ellipse(-70, 0, 80, 40);
  ellipse(-70, 0, 40, 40);
  arc(-10, 50, 100, 50, 0, PI);
  pop();
  }
  
//   StevesRanDots() {
//     translate(-250,-250)
//   let r = random(50);
//   let rloop = random(20);
//   for (let i = 0; i < r; i++) {
//     fill(r+150, rloop+10, random(150));
//     ellipse(random(500), random(height), r+10, r+10);
//   }
// }
}
