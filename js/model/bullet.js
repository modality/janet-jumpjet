var JJ = JJ || {};

JJ.Bullet = function(x, y, x_vel, y_vel) {
  pig.Entity.apply(this);

  this.x = x;
  this.y = y;
  this.x_vel = x_vel;
  this.y_vel = y_vel;

  this.image = new pig.Image(x, y, "graphics/bullet.png");
  this.graphic = this.image;
  
  this.update = function(dtime) {
    this.x = this.x + Math.round(this.x_vel * dtime);
    this.y = this.y + Math.round(this.y_vel * dtime);
    this.graphic.place([this.x, this.y]);
  };
};
