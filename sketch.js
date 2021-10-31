

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var alien1group
var alien2group
var alien3group
var beam
var beamgroup
var gameover
var score=0
function preload(){
  
//  backgroundImage = loadImage("background0.png");
  
  astronutImage = loadImage("astronut.png");
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  alien3Image = loadImage("alien3.png");
 
}



function setup() {
  createCanvas(1535,750);
  
  //creating background
 // background = createSprite(0,0,600,600);
  //background.addImage(backgroundImage);
  
  
  // creating bow to shoot arrow
  astronut = createSprite(1330,220,20,50);
  astronut.addImage(astronutImage); 
  astronut.scale = 0.5;

  alien1group=new Group()
  alien2group=new Group()
  alien3group=new Group()
  beamgroup=new Group()
}

function draw() {
  background("black")
 astronut.y=World.mouseY
 if (keyIsDown(32)){
  beam1()
}

  

  // moving ground
    
  
  //creating continous enemies
  var selectalien = Math.round(random(1,3));
  
  if (World.frameCount % 100 == 0) {
    if (selectalien == 1) {
      alien11();
    } else if (selectalien == 2) {
      alien22();
    } else if (selectalien == 3) {
      alien33();
    } 
   
  }
  
  if (beamgroup.isTouching(alien1group)) {
  alien1group.destroyEach();
  beamgroup.destroyEach();
    score=score+1;
}




 if (beamgroup.isTouching(alien2group)) {
  alien2group.destroyEach();
  beamgroup.destroyEach();
  score=score+3;
}

if(alien1group.isTouching(astronut)||alien2group.isTouching(astronut)||alien3group.isTouching(astronut)){
astronut.destroy();
score=score-1
alien1group.destroyEach()
alien2group.destroyEach()
alien3group.destroyEach()
}



 if (beamgroup.isTouching(alien3group)) {
  alien3group.destroyEach();
  beamgroup.destroyEach();
  score=score+2;
}




  
  drawSprites();
  textSize(20)
   text("Score: "+ score, 1200,50); 
   
}





// Creating  arrows for bow
 
  function alien11() {
    var alien1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  alien1.addImage (alien1Image);
    alien1.velocityX = 10;
    alien1.lifetime = 400;
    alien1.scale = 0.6;
    alien1group.add(alien1);
  }
    function alien22() {
      var alien2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
      alien2.addImage(alien2Image);
      alien2.velocityX = 10;
      alien2.lifetime = 400;
      alien2.scale = 0.3;
      alien2group.add(alien2);
    }
      function alien33() {
        var alien3= createSprite(0,Math.round(random(20, 370)), 10, 10);
        alien3.addImage(alien3Image);
        alien3.velocityX = 10;
        alien3.lifetime = 400;
        alien3.scale = 1;
        alien3group.add(alien3);
        

}
function beam1(){
  var beam=createSprite(1220,130,50,10)
  // beam.y=World.mouseY
  beam.velocityX=-3
 beam.y=astronut.y-70
  beam.shapeColor="red"
  //beam.velocityX=-1
  beamgroup.add(beam)
  return beam
}