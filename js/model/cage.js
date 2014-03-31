var JJ = JJ || {};

JJ.Cage = function(x, y, occupant) {
  JJ.Entity.apply(this);

  this.type = "cage";
  this.obstacle = true;
  this.x = x;
  this.y = y;
  this.w = 40;
  this.h = 40;
  this.obstacle = true;
  this.opened = false;

  this.empty_image = new pig.Image(x, y, JJ.Assets.EMPTY_CAGE);
  this.robot_image = new pig.Image(x, y, JJ.Assets.ROBOT_CAGE);
  this.open_image = new pig.Image(x, y, JJ.Assets.OPEN_CAGE);

  var wtt = pig.world.worldToTile(this.x, this.y);
  pig.world.grid.setTile(wtt.x, wtt.y, true);

  this.setOccupant = function(occupant) {
    this.occupant = occupant;
    if (occupant == "empty") {
      this.graphic = this.empty_image;
    } else if (occupant == "robot") {
      this.graphic = this.robot_image;
    }
    this.graphic.z = 1;
  };

  this.open = function() {
    if(this.opened) return;
    this.opened = true;
    this.type = "cage_empty"
    this.graphic = this.open_image;

    var tile = pig.world.worldToTile(this.x, this.y);

    pig.world.grid.setTile(tile.x, tile.y, false);

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
