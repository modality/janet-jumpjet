var JJ = JJ || {};

JJ.Cage = function(x, y, occupant) {
  JJ.Entity.apply(this);

  this.type = "cage";
  this.x = x;
  this.y = y;
  this.w = 40;
  this.h = 40;
  this.obstacle = true;
  this.opened = false;

  this.empty_image = new pig.Image(x, y, "graphics/cage_empty.png");
  this.robot_image = new pig.Image(x, y, "graphics/cage_beast.png");
  this.open_image = new pig.Image(x, y, "graphics/cage_open.png");

  this.setOccupant = function(occupant) {
    this.occupant = occupant;
    if (occupant == "empty") {
      this.graphic = this.empty_image;
    } else if (occupant == "robot") {
      this.graphic = this.robot_image;
    }
  };

  this.open = function() {
    if(this.opened) return;
    this.opened = true;
    this.graphic = this.open_image;
    if(this.occupant == "robot") {
      var robot = new JJ.Robot(this.x, this.y);
      pig.world.add(robot);
    }
  }

  this.setOccupant(occupant);

  this.update = function(dtime) {
    this.graphic.place([this.x, this.y]);
  };
};
