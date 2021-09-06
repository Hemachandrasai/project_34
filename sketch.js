
 const Engine = Matter.Engine;
 const Render = Matter.Render;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 const Body = Matter.Body;
 const Composites = Matter.Composites;
 const Composite = Matter.Composite;

 let engine;
 let world;
 var backgroundImg;

function preload(){
  backgroundImg = loadImage("blue.jpg");
  cloudsImg = loadImage("moving.gif");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
cloud = createSprite(200,200);
//cloud.addImage(backgroundImg)
//c/loud.velocityX = -5;
var

  
}


function draw() 
{
  background(75, 175, 218);
  Engine.update(engine);





  drawSprites();

}
function clouds(){
  var clouds = createSprite(200,Math.round(random(1,800)));
  

}

