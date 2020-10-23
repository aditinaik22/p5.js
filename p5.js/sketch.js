var car,wall;
var speed,weight;
var gameObject1,gameObject2,gameObject3

function setup() {
  createCanvas(600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor=color(255);

  wall=createSprite(1500,200,50,height/2);
  wall.shapeColor=color(30,30,30);
  
  gameObject1=createSprite(50,500,50,50);
  gameObject1.velocityX=speed;
  gameObject1.shapeColor=color(300);

  
}

function draw() {
  background(0,0,0);
  if(wall.x-car.x < (car.width+wall.width)/2)  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=color(0,255,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(255,0,0); 
    }
  }
  drawSprites();
}