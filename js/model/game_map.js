var JJ = JJ || {};

JJ.GameMap = function(grid) {
  pig.Entity.apply(this);

  var imageUrl = 'graphics/tiles.png';
  this.grid = grid;
  this.tilemap = new pig.Tilemap(
      0,
      0,
      imageUrl,
      JJ.Constants.TILE_W,
      JJ.Constants.TILE_H,
      Math.ceil(JJ.Constants.SCREEN_W / JJ.Constants.TILE_W),
      Math.ceil(JJ.Constants.SCREEN_H / JJ.Constants.TILE_H)
  );

  this.graphic = this.tilemap;

  this.setTile = function(tx, ty, tile) {
    this.grid.setTile(tx, ty, true);
    this.graphic.setTile(tx, ty, tile);
  };

  this.keyDown = function(key) {
    if(key == pig.key.G) {
      this.graphic = this.grid;
    }
  };

  this.keyUp = function(key) {
    if(key == pig.key.G) {
      this.graphic = this.tilemap;
    }
  };

};
