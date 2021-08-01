var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    clowdimage = loadImage ("cloud.png")
    obstacle1 = loadImage ("obstacle1.png")
    obstacle2 = loadImage ("obstacle2.png")
    obstacle3 = loadImage ("obstacle3.png")
    obstacle4 = loadImage ("obstacle4.png")
    obstacle5 = loadImage ("obstacle5.png")
    obstacle6 = loadImage ("obstacle6.png")
}

function setup() {

    createCanvas(600, 200)
    
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    //invisible sprite
    invisibleGround=createSprite(200,190,400,20)
    invisibleGround.visible=false
}

function draw() {
        
    background("white");

    //jump when the space button is pressed
    if (keyDown("space") && trex.y >= 156) {
    trex.velocityY = -10;
    }
    //console.log(trex.y)

    //gravity for trex
    trex.velocityY = trex.velocityY + 0.8

    //resetground
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }

    trex.collide(invisibleGround);

    spawnclowds()

    spawnobstacle()

    drawSprites();

}
function spawnclowds(){
    if(frameCount % 60 === 0){
    clowds = createSprite(600,100,20,20)
    clowds.addImage(clowdimage)
    clowds.velocityX=-3
    clowds.scale=0.1
    clowds.y=Math.round(random(150,50))
    clowds.lifetime=200
    trex.depth=clowds.depth
    trex.depth=trex.depth+1
    console.log(frameCount)
}
}
function spawnobstacle(){
    if(frameCount % 60 === 0){
   cactus = createSprite(600,180,20,20)
   cactus.velocityX = -3
   var rand=Math.round(random(1,6))
   switch(rand){
       case 1:cactus.addImage(obstacle1)
       break;
       case 2:cactus.addImage(obstacle2)
       break;
       case 3:cactus.addImage(obstacle3)
       break;
       case 4:cactus.addImage(obstacle4)
       break;
       case 5:cactus.addImage(obstacle5)
       break;
       case 6:cactus.addImage(obstacle6)
       break;
       default:
           break;
        
   }
   cactus.scale=0.07
   cactus.lifetime=200
    }
  
}