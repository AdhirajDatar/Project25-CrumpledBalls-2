class Paper {
    constructor(x,y){
        var options= {
            isStatic:false,
            restitution:0.8,
            friction:1,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,15,options);
        this.radius = 20;  
        World.add(world,this.body);  
        this.image = loadImage("paper.png"); 
    }
    display (){
        var pos =this.body.position;
        imageMode(CENTER);
        fill(255);
        image(this.image,pos.x,pos.y,40,40);
    }
}