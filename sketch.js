var Play=1;
var End=0;
var gameState=Play;
var back;
var harry,harryImg;
var diary,snitch,sword,locket,ring,cup,diadem;
var dementor;
var dementorImg
var horcrux;
var h1,hnum=1;
var h1c="Not collected",h2c="Not collected",h3c="Not collected",h4c="Not collected",h5c="Not collected",h6c="Not collected",h7c="Not collected";
function preload(){
 bg=loadImage("./assets/background.jpg");
 harryImg=loadGif("./assets/harrymain.gif");
 h1=loadImage("./assets/diary.png");
 h7=loadImage("./assets/snitch.png");
 h2=loadImage("./assets/sword.png");
 h3=loadImage("./assets/locket.png");
 h5=loadImage("./assets/ring.png");
 h4=loadImage("./assets/cup2.png");
 h6=loadImage("./assets/diadem.png");
 dementorImg=loadImage("./assets/Dementor.png");

}
function setup(){
 createCanvas(displayWidth-30,displayHeight-150);
 hocruxGroup=createGroup()
 //back=createSprite(200,220,400,20);
 //back.addImage("hogwarts",bg);
 //back.x=back.width/2;
 //back.velocityX=-4;
 
 harry=createSprite(100,100,20,20);
 harry.addImage(harryImg);
 harry.scale=0.50;
 harry.setCollider("rectangle",0,0,50,500);
 harry.debug=true
}

function draw(){
 background("bisque")

 drawSprites();
 textSize(20);
 fill("darkorchid");
  text("📕"+h1c,50,80)
  text("🗡"+h2c,200,80)
  text("📿"+h3c,350,80)
  text("🏆"+h4c,500,80)
  text("💍"+h5c,650,80)
  text("👑"+h6c,800,80)
  text("🥎"+h7c,950,80)

if (gameState === Play)
{
 /*if (back.x<0)
 {
   back.x=back.width/2
  
 }*/
  spawnHorcrux();
  spawnDementor();
 //harry.x=World.mouseX
 harry.y=World.mouseY
 if(harry.isTouching(hocruxGroup)){
   var t="h"+(hnum)+"c"
   switch(t)
   {
      case "h1c":h1c="collected";
                  hnum=hnum+1;
                  break;
      case "h2c":h2c="collected";
                  hnum=hnum+1;
                  break;
      case "h3c":h3c="collected";
                  hnum=hnum+1;
                  break; 
      case "h4c":h4c="collected";
                  hnum=hnum+1;
                  break; 
      case "h5c":h5c="collected";
                  hnum=hnum+1;
                  break; 
      case "h6c":h6c="collected";
                  hnum=hnum+1;
                  break; 
      case "h7c":h7c="collected";
                  hnum=hnum+1;
                  break;           
    }
   hocruxGroup.destroyEach();
 }
}}

function spawnHorcrux(){
  if(hnum<=7)
  {
  if (frameCount%150===0)
 {
  // console.log(hnum)
   var rand=Math.round(random(50,windowHeight-50))
   hocrux=createSprite(windowWidth,rand,40,40)
   hocrux.addImage(eval("h"+hnum));
   hocrux.velocityX=-5;
   hocrux.scale=0.25;
   hocrux.setCollider("rectangle",0,0,100,100);
   hocrux.debug=true
   hocruxGroup.add(hocrux)
 }

  }
}
function spawnDementor()
{
  if (frameCount%25===2){
  var dm=Math.round(random(50,windowHeight-50))
  dementor=createSprite(windowWidth,dm,20,20)
  dementor.scale=0.50;
  dementor.addImage(dementorImg);
  dementor.velocityX=-10;
  }
}