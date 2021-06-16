
var fixedRect, movingRect,r1;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(100, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX=-2;


  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";


  r1 = createSprite(200, 100, 50, 80);
  r1.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,r1)){
    movingRect.shapeColor="blue";
    r1.shapeColor="blue";
  }
  else {
    movingRect.shapeColor = "green";
    r1.shapeColor="green";
    fixedRect.shapeColor = "green"
  }
 
bounceOff();
//bounceOff(movingRect,fixedRect)
  drawSprites();
}
















