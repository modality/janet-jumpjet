var JJ = JJ || {};

JJ.Cursor = function(x, y) {
  JJ.Entity.apply(this);

  this.x = x;
  this.y = y;
  this.image = new pig.Image(x, y, JJ.Assets.CURSOR);
  this.graphic = this.image;
  
  this.getRect = function() {
    // cheat this to be a little smaller, so that erasing doesn't destroy surrounding blocks
    return new pig.Rect(this.x+10, this.y+10, this.graphic.width-20, this.graphic.height-20);
  }

  this.update = function(dtime) {
    if(!pig.mouse.x || !pig.mouse.y) {
      this.graphic.place([640, 0]);
      return;
    }

    this.x = Math.floor(pig.mouse.x / JJ.Constants.TILE_W) * JJ.Constants.TILE_W; 
    this.y = Math.floor(pig.mouse.y / JJ.Constants.TILE_H) * JJ.Constants.TILE_H;
    this.graphic.place([this.x, this.y]);
  };
}
