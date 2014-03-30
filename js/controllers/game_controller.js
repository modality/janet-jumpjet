var JJ = JJ || {};

JJ.GameController = function() {
  pig.World.apply(this);
  JJ.CombatRules.apply(this);

  pig.init('main-canvas');
  pig.world = this;

  this.grid = new pig.Grid(0, 0, 640, 480, 40, 40);
  this.game_map = new JJ.GameMap(this.grid);
  this.paused = false;

  var janet = new JJ.Player(320, 240);
  var cursor = new JJ.Cursor(0, 0);

  var robot = new JJ.Robot(320, 300);

  var robo_cage = new JJ.Cage(120, 120, "robot");
  var empty_cage = new JJ.Cage(480, 120, "empty");

  this.add(this.game_map);
  this.add(janet);
  this.add(robot);
  this.add(robo_cage);
  this.add(empty_cage);

  pig.run();

  var modeOptions = {};

  this.update = function(dtime) {
    this.combat();
    this._update(dtime);
  };

  this.changeGameMode = function(mode) {
    this[mode+'Mode']();
  };

  this.playMode = function() {
    this.paused = false;
    $('#palette').hide();
    pig.world.remove(cursor);
  };

  this.editMode = function() {
    pig.world.add(cursor);
    $('#palette').show();
    this.paused = true;
  };

  this.rulesMode = function() {
    this.paused = true;
  }

  cursor.mouseDown = function() {
    pig.world.game_map.setTile(Math.floor(pig.mouse.x / JJ.Constants.TILE_W),
                               Math.floor(pig.mouse.y / JJ.Constants.TILE_H),
                               1);
  }
};
