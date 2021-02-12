
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber;
var stone;
var plane
var iron;
var hammer;
var sand;


function preload(){
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    rubber= new Rubber(400,400,15,15)
    stone= new Stone(150,400,35,90)
    plane= new Plane(400,499,10,800)
    iron= new Iron(710,400,100,100)
    hammer= new Hammer(300,350,100,35)
    sand= new Sand(400,495,15)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //ecllipseMode(RADIUS)
  background('lightblue');
  
  rubber.display();
  stone.display();
  plane.display();
  iron.display();
  hammer.display();
  sand.display();

  drawSprites();
 
}



