var wall,car;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  speed = random(55,290);
  weight = random(400,1500);

  car=createSprite(400, 200,800,20);
  car.shapeColor="white";
  car.velocityX= speed;

  wall=createSprite(1500,100,50,200);
  
  wall.shapeColor=rgb(80,80,80);

  
 
}

function draw() {
  background("BLACK"); 

 defomr =0.5*weight*speed*speed ;

if(wall.x- car.x<wall.width/2+car.width/2
  &&car.x-wall.x<car.width/2+wall.width/2 
  &&wall.x- car.x<wall.width/2+car.width/2
  &&car.x-wall.x<car.width/2+wall.width/2 ){

 
if(deformr<100){
car.shapeColor=0,225,0;
}
if(deformr(100,180)){
  car.shapeColor=230,230,0;
  }
  if(deformr>180){
    car.shapeColor=225,0,0;
    }
 car.velocityX=0;
}


  drawSprites();
}

Text(speed,1000,350);
Text(weight,1000,350);
Text(deform,1000,350);