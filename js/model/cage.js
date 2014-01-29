var JJ = JJ || {};

JJ.Cage = function(x, y, occupant) {
  pig.Entity.apply(this);

  this.type = "cage";
  this.x = x;
  this.y = y;

  this.empty_image = new pig.Image(x, y, "graphics/cage_empty.png");
  this.robot_image = new pig.Image(x, y, "graphics/cage_beast.png");

  this.setOccupant = function(occupant) {
    this.occupant = occupant;
    if (occupant == "empty") {
      this.graphic = this.empty_image;
    } else if (occupant == "robot") {
      this.graphic = this.robot_image;
    }
  };

  this.setOccupant(occupant);

  this.update = function(dtime) {
    this.graphic.place([this.x, this.y]);
  };
};
