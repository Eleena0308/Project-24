const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3
var ball
var ground

function setup(){
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	
	ground=createSprite(width/2, 650, width, 10);
	ground.shapeColor=color("white")

	box1=createSprite(310, 600, 20, 100);
	box1.shapeColor=color("purple");
	
	box2=createSprite(400, 650, 200, 20);
	box2.shapeColor=color("purple");
	
	box3=createSprite(490, 600, 20, 100);
	box3.shapeColor=color("purple");
 
	ball = new PaperClass(200, 100,  10)
	
	groundBody = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, groundBody);

	box1Body = Bodies.rectangle(310, 600, 20, 100, {isStatic:true} );
	World.add(world, box1Body);
	
	box2Body = Bodies.rectangle(400, 650, 200, 20, {isStatic:true} );
	World.add(world, box2Body);
	
	box3Body = Bodies.rectangle(490, 600, 20, 100, {isStatic:true} );
 	World.add(world, box3Body);


	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
 
  ball.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

	}
}