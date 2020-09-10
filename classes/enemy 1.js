class Enemy1{
    constructor(x, y){
        this.redEnemy = createSprite(x, y, 10, 10)
        this.redImage = loadImage("pics/enemy 1.1.png")
    }
    Enemy_1(){
        this.redEnemy.addImage(this.redImage);
        this.redEnemy.scale = 0.25
        this.redEnemy.collide(invisibleGround);
        this.redEnemy.velocityY = 1
        this.redEnemy.collide(tiel);
    }
}