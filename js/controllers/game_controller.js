var JJ = JJ || {};

JJ.GameController = function() {
  pig.World.apply(this);

  console.log('initializing canvas...');
  pig.init('main-canvas');
  pig.world = this;

  this.grid = new pig.Grid(0, 0, 640, 480, 40, 40);
  this.game_map = new JJ.GameMap(this.grid);

  var janet = new JJ.Player(320, 240);
  var cursor = new JJ.Cursor(0, 0);

  this.add(this.game_map);
  this.add(janet);

  pig.run();

  var modeOptions = {};

  this.changeGameMode = function(mode) {
    console.log('mode', mode);
    this[mode+'Mode']();
  };

  this.playMode = function() {
    pig.world.remove(cursor);
    pig.world.add(janet);
  };

  this.editMode = function() {
    pig.world.remove(janet);
    pig.world.add(cursor);
  };

  cursor.mouseDown = function() {
    pig.world.game_map.setTile(Math.floor(pig.mouse.x / JJ.Constants.TILE_W),
                               Math.floor(pig.mouse.y / JJ.Constants.TILE_H),
                               1);
  }

  this.rulesMode = function() {
  };
};
