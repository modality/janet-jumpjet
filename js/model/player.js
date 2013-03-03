var JJ = JJ || {};

JJ.Player = function(x, y,grid) {
  var pixelsPerSec = 100;
  var that = this;

  pig.Entity.apply(this);

  this.x = x;
  this.y = y;
  this.image = new pig.Image(x, y, "graphics/janet.png")
  this.graphic = this.image;

  function isPressed(keycode) {
    return pig.keysPressed[keycode];
  }

  var handleInput = function(dtime) {
    var xOffset = 0, yOffset = 0;

    if(isPressed(pig.key.LEFT)) {
      xOffset -= dtime * pixelsPerSec;
    }

    if(isPressed(pig.key.RIGHT)) {
      xOffset += dtime * pixelsPerSec;
    }

    if(isPressed(pig.key.UP)) {
      yOffset -= dtime * pixelsPerSec;
    }

    if(isPressed(pig.key.DOWN)) {
      yOffset += dtime * pixelsPerSec;
    }

    xOffset = Math.round(xOffset);
    yOffset = Math.round(yOffset);

    return [this.x + xOffset, this.y + yOffset];
  }

  handleInput = handleInput.bind(this);

  this.update = function(dtime) {
    var tryMove = handleInput(dtime);

    if(!grid.hitTest(this, tryMove[0], tryMove[1])) {
      this.x = tryMove[0];
      this.y = tryMove[1];
    } else if(!grid.hitTest(this, this.x, tryMove[1])) {
      this.y = tryMove[1];
    } else if(!grid.hitTest(this, tryMove[0], this.y)) {
      this.x = tryMove[0];
    }
    this.graphic.place([this.x, this.y]);
  };
}
