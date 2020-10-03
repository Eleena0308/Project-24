class PaperClass {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, radius);
      this.width = radius;
      this.height = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("blue");
      stroke("blue");
      ellipse(pos.x,pos.y,this.width,this.height)
    }
  };
  