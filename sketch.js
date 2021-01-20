const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,backgroundImg;
var monster,monsterImg1,monsterImg2;
var superhero,superheroImg1,superheroImg2;

function preload() {
//preload the images here
backgroundImg=loadImage("images/gamingBackground.png");
}

function setup() {
  createCanvas(1350,600);
   engine = Engine.create();
    world = engine.world;
  // create sprites here
superhero = new Superhero(200,300,20,20);

}

function draw() {
  background(backgroundImg);
Engine.update(engine);
superhero.display();
}

