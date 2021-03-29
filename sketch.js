
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


var bob1, bob2, bob3, bob4, bob5;
var roofObject;
var rope,rope1, rope2, rope3, rope4 ;


function setup() {
	createCanvas(800, 800);
	background(10)


	engine = Engine.create();
	world = engine.world;


	roofObject = new roof(350,200,500,50);
 /* bobDiameter=40;
  startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob4=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);*/

	bob1 = new bob(150,600,100);
  bob2 = new bob(250,600,100);
  bob3 = new bob(350,600,100);
  bob4 = new bob(450,600,100);
	bob5 = new bob(550,600,100);

	
  rope = new Rope(bob1.body, { x: 190, y: 200 });
  rope1 = new Rope(bob2.body, { x: 280, y: 200 });
  rope2 = new Rope(bob3.body, { x: 370, y: 200 });
  rope3 = new Rope(bob4.body, { x: 460, y: 200 });
  rope4 = new Rope(bob5.body, { x: 550, y: 200 });


 /* rope1=new Rope(bob1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new Rope(bob2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,roofObject.body,0, 0)
	rope4=new Rope(bob4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bob5.body,roofObject.body,bobDiameter*2, 0)*/

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  roofObject.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 // line(bob1.body.position.x, bob1.body.position.y,roof1.body.position.x - 200, roof1.body.position.y);
 // line(bob2.body.position.x, bob2.body.position.y,roof1.body.position.x - 100, roof1.body.position.y);
//  line(bob3.body.position.x, bob3.body.position.y,roof1.body.position.x, roof1.body.position.y);
 // line(bob4.body.position.x, bob4.body.position.y,roof1.body.position.x + 100, roof1.body.position.y);
//  line(bob5.body.position.x, bob5.body.position.y,roof1.body.position.x + 200, roof1.body.position.y);

rope.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();

 
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    console.log("key pressed");
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:300,y:-100});
    //Matter.body.setStatic(bob5.body, false);
  }
}

