var Space3,Space2,Space1;
var WCar,RCar,YCar,GCar;
var crasher1,crasher2,crasher3,crasher4;

function setup() {
  createCanvas(800,800);
  Space1=createSprite(400, 200,800,20);
  Space2=createSprite(400, 400,800,20);
  Space3=createSprite(400, 600,800,20);
  Space3.shapeColor="white";
  Space2.shapeColor="white";
  Space1.shapeColor="white";

  WCar=createSprite(60,100,50,50);
  RCar=createSprite(60,300,50,50);
  YCar=createSprite(60,500,50,50);
  GCar=createSprite(60,700,50,50);
  WCar.shapeColor="white";
  RCar.shapeColor="red";
  YCar.shapeColor="yellow";
  GCar.shapeColor="green";



  crasher1=createSprite(740,100,15,100);
  crasher2=createSprite(740,300,15,100);
  crasher3=createSprite(740,500,15,100);
  crasher4=createSprite(740,700,15,100);

  WCar.velocityX=5;
  RCar.velocityX=5;
  YCar.velocityX=5;
  GCar.velocityX=5;

}

function draw() {
  background("BLACK");  




  WCar.bounceOff(crasher1);
  RCar.bounceOff(crasher2);
  YCar.bounceOff(crasher3);
  GCar.bounceOff(crasher4);






  drawSprites();
}