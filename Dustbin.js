class Dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.Dwidth=200;
        this.Dheight=200;
        this.Dthickness=20;
        this.image=loadImage("dustbingreen.png");
         
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.Dwidth, this.Dthickness, {isStatic:true})
       
        this.leftWallBody=Bodies.rectangle(this.x-this.Dwidth/2, this.y-this.Dheight/2, this.Dthickness, this.Dheight, {isStatic:true})
		
		this.rightWallBody=Bodies.rectangle(this.x+this.Dwidth/2, this.y-this.Dheight/2, this.Dthickness, this.Dheight, {isStatic:true})
	
        
        World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);
 }
 display(){
     var bottom=this.bottomBody.position;
     var left=this.leftWallBody.position;
     var right=this.rightWallBody.position;

     push()
	 translate(left.x,left.y);
	 rectMode(CENTER)
	 //angleMode(RADIANS)
	 fill(255)
	 stroke(255)
	 rotate(this.angle)
     pop()
     
     push()
	 translate(right.x,right.y);
	 rectMode(CENTER)
	 //angleMode(RADIANS)
	 fill(255);
	 stroke(255)
	 rotate(this.angle)
     pop()
     
     push()
	 translate(bottom.x,bottom.y);
	 imageMode(CENTER)
	 //angleMode(RADIANS)
	 fill(255)
	 stroke(255)
	 rotate(this.angle)
	 image(this.image,0,-this.Dheight/2,this.Dwidth,this.Dheight);
	 pop()
   }
}