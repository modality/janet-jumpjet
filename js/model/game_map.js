var JJ = JJ || {};

JJ.GameMap = function(grid) {
  pig.Entity.apply(this);

  var imageUrl = JJ.Assets.TILES;
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
  this.graphic.z = 0;

  this.setTile = function(tx, ty, tile) {
    this.grid.setTile(tx, ty, (tile == 1) ? true : false);
    this.graphic.setTile(tx, ty, tile);
  };

  this.keyDown = function(key) {
    if(key == pig.key.G) {
      this.graphic = this.grid;
      this.graphic.z = 0;
    }
  };

  this.keyUp = function(key) {
    if(key == pig.key.G) {
      this.graphic = this.tilemap;
      this.graphic.z = 0;
    }
  };
};
