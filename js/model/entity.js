var JJ = JJ || {};

JJ.Entity = function() {
  pig.Entity.apply(this);

  this.obstacle = false;

  this.getRect = function() {
    return new pig.Rect(this.x, this.y, this.graphic.width, this.graphic.height);
  };
  
  this.collideWith = function(entity) {
    return this.collide(entity.getRect());
  };

  this.collide = function(rect) {
    return this.getRect().collideRect(rect);
  };

  this.tryMove = function(x, y) {
    if(x != this.x) {
      if(!pig.world.grid.hitTest(this, x, this.y)) {
        this.x = x;
      }

      if(this.x < 0) { this.x = 0; }
      if(this.x >= pig.canvas.width - this.getRect().w) {
        this.x = pig.canvas.width - this.getRect().w;
      }
    }

    if(y != this.y) {
      if(!pig.world.grid.hitTest(this, this.x, y)) {
        this.y = y;
      }

      if(this.y < 0) { this.y = 0; }
      if(this.y >= pig.canvas.height - this.getRect().h) {
        this.y = pig.canvas.height - this.getRect().h;
      }
    }
  };
};
