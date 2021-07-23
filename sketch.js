const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var PlayerBase,Player,computerBase,angle;

function preload(){

  PlayerImage=loadImage("assets/player.png")
  
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  
   //Create Player Base and Computer Base Object
   
   
   computerBase=new ComputerBase(500,400,180,50);
  
   playerBase= new PlayerBase(285,height-300,50,180)
    
   player= new Player(300,random(400,height-350),180,150)
 
  
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   player.display();
   computerBase.display();
   playerBase.display();


   //display Player and computerplayer
   
  

}
