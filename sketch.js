const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(1200,400);
 
  engine = Engine.create();
  world = engine.world;
  var object_options={
    restitution:0.8,
    friction:0.7
  }
object=Bodies.circle(400,100,25, object_options);
World.add(world, object);
var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(600,350,1200,25, ground_options);
World.add(world, ground);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,30);
  rect(ground.position.x,ground.position.y,1200,25);
}