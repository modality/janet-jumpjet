var JJ = JJ || {};

JJ.GameController = function() {
  pig.World.apply(this);
  JJ.CombatRules.apply(this);

  pig.init('main-canvas');
  pig.world = this;

  var modeOptions = {};
  var cursor;

  this.init = function() {

    this.grid = new pig.Grid(0, 0, 640, 480, 40, 40);
    this.game_map = new JJ.GameMap(this.grid);
    this.paused = false;

    var janet = new JJ.Player(310, 400);

    cursor = new JJ.Cursor(0, 0);

    this.add(this.game_map);
    this.add(janet);

    JJ.LevelDefault.apply(this);

    JJ.PaletteRules.apply(this, [cursor]);

    pig.run();
  }

  this.update = function(dtime) {
    this.combat();
    //this.palette();
    this._update(dtime);
  };

  this.changeGameMode = function(mode) {
    this[mode+'Mode']();
  };

  this.worldToTile = function(x, y) {
    return {
      x: Math.floor(x / JJ.Constants.TILE_W),
      y: Math.floor(y / JJ.Constants.TILE_H)
    };
  }

  this.playMode = function() {
    this.paused = false;
    $('#palette').trigger("hide");
    pig.world.remove(cursor);
  };

  this.editMode = function() {
    pig.world.add(cursor);
    $('#palette').trigger("display");
    this.paused = true;
  };

  this.rulesMode = function() {
    this.paused = true;
  }


  this.init();
};
