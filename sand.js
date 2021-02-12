class Sand {
    constructor(x, y, radius ) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width =width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      ecllipseMode(RADIUS)
      strokeWeight(4)
      //stroke("blue")
      fill('brown');
      ecllipse(0, 0,this.radius);
      pop();
    }
  };