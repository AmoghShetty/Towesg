const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8;








function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine=Engine.create()
	world=engine.world 

	


	Engine.run(engine);
    block1=new Block(330,235,30,40)
    block2=new Block(360,235,30,40)
    block3=new Block(390,235,30,40)
	block4=new Block(420,235,30,40)
	block5=new Block(450,235,30,40)
	block6=new Block(360,195,30,40)
	block7=new Block(390,195,30,40)
	block8=new Block(420,195,30,40)
	block9=new Block(390,1555,30,40)
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display(); 
block7.display(); 
block8.display(); 
  drawSprites();
 
}
