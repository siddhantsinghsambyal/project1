class Rubber {
    constructor(x, y,radius, angle) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
    this.RADIUS=radius
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
     //ecllipseMode(RADIUS)
      strokeWeight(4)
      stroke("blue")
      fill('blue');
      circle(0, 0,this.radius);
      pop();
    }
  };