var JJ = JJ || {};

JJ.Cursor = function(x, y) {
  pig.Entity.apply(this);

  this.x = x;
  this.y = y;
  this.image = new pig.Image(x, y, "graphics/cursor.png");
  this.graphic = this.image;

  this.update = function(dtime) {
    this.x = Math.floor(pig.mouse.x / JJ.Constants.TILE_W) * JJ.Constants.TILE_W; 
    this.y = Math.floor(pig.mouse.y / JJ.Constants.TILE_H) * JJ.Constants.TILE_H;
    this.graphic.place([this.x, this.y]);
  };
}
