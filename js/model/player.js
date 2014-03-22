var JJ = JJ || {};

JJ.Player = function(x, y) {
  JJ.Entity.apply(this);

  this.x = x;
  this.y = y;
  this.graphic = new pig.Sprite(x, y, "graphics/janet.png", 28, 26);
  this.flipped = false;

  var firingTimeout = 0;

  this.graphic.add("right", [0]);
  this.graphic.add("left", [1]);

  function isPressed(keycode) {
    return pig.keysPressed[keycode];
  }

  this.move = function(dtime) {
    var xOffset = 0, yOffset = 0;

    if(isPressed(pig.key.LEFT)) {
      xOffset -= dtime * JJ.Constants.PLAYER_SPEED;
      if(!this.flipped) {
        this.flipped = true;
        this.graphic.play("left", 1);
      }
    }

    if(isPressed(pig.key.RIGHT)) {
      xOffset += dtime * JJ.Constants.PLAYER_SPEED;
      if(this.flipped) {
        this.flipped = false;
        this.graphic.play("right", 1);
      }
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
        var bullet;

        if(!this.flipped) {
          bullet = new JJ.Bullet(this.x + 32, this.y + 16, JJ.Constants.BULLET_SPEED, 0);
        } else {
          bullet = new JJ.Bullet(this.x - 8, this.y + 16, -JJ.Constants.BULLET_SPEED, 0);
        }
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
