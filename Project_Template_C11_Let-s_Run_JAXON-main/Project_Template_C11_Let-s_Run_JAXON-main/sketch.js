var path
var boy
function preload(){
  //pre-load images
pathImg = loadImage("path.png");
runner_boy = loadAnimation("Runner-1.png", "Runner-2.png");


}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
  boy = createSprite(180,340,30,30);
  boy.addAnimation("running", runner_boy)
  boy.scale = 0.08
  
}

function draw() {
  background(0);
  drawSprites()
  boy.x = mouseX
  if(path.y > 300 ){
    path.y = height/2
  }
 
}
