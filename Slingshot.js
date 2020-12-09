class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        
    }

    fly(){
        this.sling.bodyA = null;
    }
 attach(body){
this.sling.bodyA=body

 }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x>=250){
            strokeWeight(8);
            
            }
            else 
             strokeWeight(15)
            stroke('#301608')
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,10,30)
        }
        image(this.sling1,250,25)
        image(this.sling2,220,15)
    }
    
}