var garden, rabbit;
var gardenImg, rabbitImg;
var ranNum;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);

  rabbit.x = World.mouseX;

  edges = createEdgeSprites();
  rabbit.collide(edges);

  if (frameCount % 80 === 0) {
    apple = createSprite(random(50, 350), 40, 10, 10);
    apple.addImage(appleImg)
    apple.velocityY = +9
    ranNum = Math.round(random(1, 2));
    apple.scale = 0.1;
    apple.lifetime = 134;
    apple.depth = 1;

  }
  if (frameCount % 350 === 0) {
    leaf = createSprite(random(50, 380), 40, 10, 10);
    leaf.addImage(leafImg)
    leaf.velocityY = +9
    leaf.scale = 0.1;
    leaf.lifetime = 134;
    leaf.depth = 1;
  }


  drawSprites();
}