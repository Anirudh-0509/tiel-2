var tiel;
var tielImage;
var ground, groundImage;
var invisibleGround;
var red1;
var healthBar, health = 500;


function preload(){
    tielImage =  loadImage("pics/tiel.png")

}

function setup(){
    createCanvas(displayWidth, displayHeight - 100)
    tiel = createSprite(75, 715, 10, 10)
    tiel.addImage(tielImage)
    tiel.scale = 0.3;
    ground = createSprite(displayWidth/2, 790, displayWidth, 20)
    invisibleGround = createSprite(displayWidth/2, 790, displayWidth, 20)
    red1 = new Enemy1(500, 715)
    healthBar = createSprite(displayWidth/2, 20, health, 10)
    healthBar.shapeColor = rgb(255, 0, 0)
    
}

function draw(){
    background(50, 50, 50)
    if(keyDown ("w")){
        tiel.velocityY = -25
    }

    if(keyDown ("a")){
        tiel.x = tiel.x - 5
    }

    if(keyDown ("d")){
        tiel.x = tiel.x + 5
    }
    
    tiel.velocityY = tiel.velocityY + 5
    tiel.collide(invisibleGround);

    red1.Enemy_1()
    drawSprites();
}