var iss, issImg;
var bg;
var capsule, capsuleImg1, capsuleImg2, capsuleImg3 ,capsuleImg4;

function preload(){
issImg = loadImage("iss.png");
bg = loadImage("spacebg.jpg");
capsuleImg1 = loadImage("spacecraft1.png");
capsuleImg2 = loadImage("spacecraft2.png");
capsuleImg3 = loadImage("spacecraft3.png");
capsuleImg4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1200,900);
  iss = createSprite(700,350,20,20);
  iss.addImage("spacestation",issImg);
  iss.scale = 1.1;

  capsule = createSprite(700,800,20,20);
  capsule.addImage("spacecraft1", capsuleImg1);
  capsule.addImage("spacecraft2", capsuleImg2);
  capsule.addImage("spacecraft3", capsuleImg3);
  capsule.addImage("spacecraft4", capsuleImg4);
  capsule.scale = 0.2;

}

function draw() {
  background(bg);

  if(keyDown(UP_ARROW)){
    capsule.y = capsule.y-5;
    capsule.changeImage("spacecraft2", capsuleImg2);
  }

  if(keyDown(DOWN_ARROW)){
    capsule.y = capsule.y+5;
    capsule.changeImage("spacecraft2", capsuleImg2);
  }

  if(keyDown(LEFT_ARROW)){
    capsule.x = capsule.x-5;
    capsule.changeImage("spacecraft3", capsuleImg3);
  }

  if(keyDown(RIGHT_ARROW)){
    capsule.x = capsule.x+5;
    capsule.changeImage("spacecraft4", capsuleImg4);
  }

  if(capsule.x === 620 && capsule.y === 450){
    capsule.changeImage("spacecraft1", capsuleImg1);
    textSize(100);
    text("Docked!",490,750);
  }

  capsule.depth = iss.depth;
  iss.depth = iss.depth+1;

  drawSprites();
}
