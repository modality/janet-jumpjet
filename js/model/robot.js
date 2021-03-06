var JJ = JJ || {};

JJ.Robot = function(x, y) {
  JJ.Entity.apply(this);

  this.type = "robot";
  this.obstacle = true;
  this._removed = false;
  this.x = x;
  this.y = y;
  this.w = 40;
  this.h = 40;
  this.image = new pig.Image(x, y, JJ.Assets.ROBOT)
  this.graphic = this.image;
  this.graphic.z = 2;

  this.directionTimeout = 0
  this.direction = 'up';

  this.removed = function() {
    this._removed = true;
  };

  this.getRect = function() {
    return new pig.Rect(this.x + 5, this.y + 5, 30, 30)
  };

  this.move = function(dtime) {
    this.directionTimeout -= dtime;
    if(this.directionTimeout <= 0) {
      this.directionTimeout = JJ.Constants.ROBOT_WALK_TIME;
      switch(Math.floor(Math.random() * 4)) {
        case 0: this.direction = 'up'; break;
        case 1: this.direction = 'right'; break;
        case 2: this.direction = 'down'; break;
        case 3: this.direction = 'left'; break;
      }
    }

    var move;

    switch(this.direction) {
      case 'up': move = [0, -(dtime * JJ.Constants.ROBOT_SPEED)]; break;
      case 'right': move = [(dtime * JJ.Constants.ROBOT_SPEED), 0]; break;
      case 'down': move = [0, (dtime * JJ.Constants.ROBOT_SPEED)]; break;
      case 'left': move = [-(dtime * JJ.Constants.ROBOT_SPEED), 0]; break;
    }

    this.tryMove(this.x + move[0], this.y + move[1]);
  };


  this.update = function(dtime) {
    if(!pig.world.paused) {
      this.move(dtime);
    }
    this.graphic.place([this.x, this.y]);
  };
};
