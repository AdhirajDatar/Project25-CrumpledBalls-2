
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Paper(40,100);

	Dustbin = new DBin(705,605);

	box1 = new Bin(700,690,190,20);

	box2 = new Bin(624,605,20,150);

	box3 = new Bin(784,605,20,150);

	gound = new Ground(400,690);

	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  gound.display();
  Dustbin.display();
  ball.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Body.applyForce(ball.body,ball.body.position,{x:30,y:-40})
	}
}

