var trex, trex_running, edges;
var groundImage;
var ground;
var invisibleGround;
var cloud, cloudImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200);

  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  edges = createEdgeSprites();

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground",groundImage);
  ground.x=ground.width/2;
  //ground.debug=true;

  //creating invisable ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false
}

function draw(){
  //set background color 
  background("white");

  ground.velocityX = -2;

  if (ground.x < 0) {
    ground.x = ground.width/2;
  }

  //jump when space key is pressed
  if(keyDown("space") && trex.y > 145){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;

  //stop trex from falling down
  trex.collide(invisibleGround);
  
  spawnCloud();

  drawSprites();
}

function spawnCloud() {
  if(frameCount % 60 === 0) {
    cloud = createSprite(600,Math.round(random(20,50)),20,10);
    cloud.velocityX=-5;
    cloud.addImage(cloudImage)
    cloud.depth=trex.depth
    trex.depth=trex.depth+1
    cloud.scale = 0.4
  }
  
}