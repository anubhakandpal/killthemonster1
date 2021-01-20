class Superhero {
	constructor(x,y,r){
		var options={
			density:1,
			frictionAir:1
		}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("images/superhero-01.png");
		this.image=loadImage("images/superhero-02.png");
		this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
		World.add(world,this.body);
		this.image.scale = 0.1;

}
	display(){
		var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
	}
}