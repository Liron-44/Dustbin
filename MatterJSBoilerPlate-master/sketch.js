
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 paperP = new Paper();
 dustbin1 = new Dustbin(500, 200, 20, 100);
 dustbin2 = new Dustbin(550, 150, 100, 20);
 dustbin3 = new Dusbin(600, 100, 20, 100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



