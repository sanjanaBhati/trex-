var fixedrect,movingrect,O1,O2;
function setup() {
  createCanvas(800,400);
fixedrect=  createSprite(400, 200, 50, 50);
movingrect=  createSprite(400, 300, 80, 30);
O1=  createSprite(100, 200, 50, 50);
O2=  createSprite(200, 300, 80, 30);
}



function draw() {
  background("black");  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(isTounching( movingrect,O1)){
    fixedrect.shapeColor="blue";
    O1.shapeColor="blue";
  }
  else{
    fixedrect.shapeColor="green";
    O1.shapeColor="green";
  }  

  drawSprites(); 

}

