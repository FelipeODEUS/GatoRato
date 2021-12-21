var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadImage("images/cat2.png, images/cat3.png");
    mouseImg2 = loadImage("images/mouse2.png, images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado", catImg1);
    cat.scale = 0.2;

}

function draw() {

    background("images/garden.png");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("ultimaImagemGato", catImg3);
        cat.changeAnimation("ultimaImagemGato");
        cat.x = 300;
        cat.scale = 0.2;
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("ratoProvocando", mouseImg2);
      mouse.changeAnimation("ratoProvocando");
      mouse.frameDelay = 25;
  }

  

  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.addAnimation("gatoCorrendo", catImg2);
      cat.changeAnimation("gatoCorrendo");
      cat.velocityX = -5;
  }
}