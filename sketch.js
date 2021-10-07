
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine, world;

// function preload()
// {
	
// }

function setup() {
	createCanvas(1600, 700);
    
    
	engine = Engine.create();
	world = engine.world;
    


	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball = Bodies.circle(256, 50, 27, ball_options);
    World.add(world,ball);

    groundobj = new Ground(width/2,690,width,20);
	 wall1 = new Ground(1100, 620, 35, 120)
     wall2 = new Ground(850, 620, 35, 120)

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  groundobj.display();
  wall1.display();
  wall2.display();
  //drawSprites();
 ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,27,27);
}

function keyPressed(){
	if (keyCode === 32 ){
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:80,y:-80});
	}
}

