var JJ = JJ || {};

JJ.Bullet = function(x, y, x_vel, y_vel) {
  JJ.Entity.apply(this);

  this.type = "bullet";
  this.x = x;
  this.y = y;
  this.x_vel = x_vel;
  this.y_vel = y_vel;

  this.image = new pig.Image(x, y, JJ.Assets.BULLET);
  this.graphic = this.image;

  this.removed = function() {
    this._removed = true;
  }
  
  this.update = function(dtime) {
    if(!pig.world.paused) {
      this.x = this.x + Math.round(this.x_vel * dtime);
      this.y = this.y + Math.round(this.y_vel * dtime);
      this.graphic.place([this.x, this.y]);
      if(this.x > pig.canvas.width || this.y > pig.canvas.height) {
        pig.world.remove(this);
      }
      if(this.x < 0 || this.y < 0) {
        pig.world.remove(this);
      }
    }
  };

  this.collide = function(rect) {
    var selfRect = new pig.Rect(this.x, this.y, 6, 6);
    return selfRect.collideRect(rect);
  };
};
