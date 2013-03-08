var JJ = JJ || {};

JJ.GameController = function() {
  console.log('initializing canvas...');
  pig.init('main-canvas');

  var grid = new pig.Grid(0, 0, 640, 480, 40, 40);
  var gm = new JJ.GameMap(grid);
  var janet = new JJ.Player(320, 240, grid); 
  var cursor = new JJ.Cursor(0, 0, gm);

  pig.world.add(gm);
  pig.world.add(janet);
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

}
