//creating physics engine constant using matter.js
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
//declaring a variable for ball object
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //storing object property of physics engine
    var ground_options ={
        isStatic: true
    }

    //storing object property of physics engine for ball
    var ball_options ={
        restitution: 0.8

    }

    //creating a ball and adding to the bodies
    ball = Bodies.circle(100,100,20,ball_options);
    World.add(world,ball);

    //creating a rectangle which is using physics property
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

}