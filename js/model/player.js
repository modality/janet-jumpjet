var JJ = JJ || {};

JJ.Player = function(x, y) {
  JJ.Entity.apply(this);

  this.x = x;
  this.y = y;
  this.image = new pig.Image(x, y, "graphics/janet.png")
  this.graphic = this.image;

  var firingTimeout = 0;

  function isPressed(keycode) {
    return pig.keysPressed[keycode];
  }

  this.move = function(dtime) {
    var xOffset = 0, yOffset = 0;

    if(isPressed(pig.key.LEFT)) {
      xOffset -= dtime * JJ.Constants.PLAYER_SPEED;
    }

    if(isPressed(pig.key.RIGHT)) {
      xOffset += dtime * JJ.Constants.PLAYER_SPEED;
    }

    if(isPressed(pig.key.UP)) {
      yOffset -= dtime * JJ.Constants.PLAYER_SPEED;
    }

    if(isPressed(pig.key.DOWN)) {
      yOffset += dtime * JJ.Constants.PLAYER_SPEED;
    }

    xOffset = this.x + Math.round(xOffset);
    yOffset = this.y + Math.round(yOffset);

    this.tryMove(xOffset, yOffset);
  }

  this.shoot = function(dtime) {
    if(firingTimeout > 0) {
      firingTimeout -= dtime;
    } else {
      if(isPressed(pig.key.SPACE)) {
        firingTimeout = JJ.Constants.FIRING_DELAY;
        var bullet = new JJ.Bullet(this.x + 32, this.y + 16, JJ.Constants.BULLET_SPEED, 0);
        pig.world.add(bullet);
      }
    }
  };

  this.update = function(dtime) {
    this.move(dtime);
    this.shoot(dtime);
    this.graphic.place([this.x, this.y]);
  };
};
