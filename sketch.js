var bgImg;
var cat;
var mouse;
var catImg1, catImg2, catImg3;
var mouseImg1, mouseImg2, mouseImg3;

function preload() {
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/tom1.png");
    catImg2 = loadAnimation("images/tom2.png", "images/tom3.png");
    catImg3 = loadAnimation("images/tom4.png");
    mouseImg1 = loadAnimation("images/jerry1.png");
    mouseImg2 = loadAnimation("images/jerry2.png", "images/jerry3.png");
    mouseImg3 = loadAnimation("images/jerry4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("ratoSentado", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("ultimaImagemGato", catImg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("ultimaImagemGato");
        
        mouse.addAnimation("ultimaImagemRato", mouseImg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("ultimaImagemRato");
    }

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("gatoCorrendo", catImg2);
      cat.changeAnimation("gatoCorrendo"); 
    
      mouse.addAnimation("ratoProvocando", mouseImg2);
      mouse.frameDelay = 25;
      mouse.changeAnimation("ratoProvocando");
      
  }
}