var rect1,rect2;
function setup(){
  createCanvas(1200,800);
  rect1 = createSprite(500,300,60,90);
  rect1.shapeColor= "blue";
  rect2 = createSprite(300,300,90,40);
  rect2.shapeColor= "blue";
}

function draw(){
  background("black");
  rect1.x = mouseX;
  rect1.y = mouseY;

  if(rect2.x - rect1.x < rect1.width/2 + rect2.width/2 && rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && rect2.y- rect1.y < rect1.height/2+ rect2.height/2 && rect1.y - rect2.y < rect1.height/2 + rect2.height/2){
    rect1.shapeColor = "yellow";
    rect2.shapeColor = "yellow";
  }
  else{
    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }
 
 drawSprites();
}