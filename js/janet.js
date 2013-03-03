var JJ = JJ || {};

$(function() {
  JJ.Main = (function() {
    function init() {
      console.log('initializing canvas...');
      pig.init('main-canvas');

      var grid = new pig.Grid(0, 0, 640, 480, 40, 40);
      var gm = new JJ.GameMap(grid);
      var janet = new JJ.Player(320, 240, grid); 

      pig.world.add(gm);
      //pig.world.add(grid);
      pig.world.add(janet);
      pig.world.add(new JJ.Cursor(0, 0, gm));
      pig.run();

      console.log(janet);
    }

    return {
      init: init
    };
  })();

  JJ.Main.init();
});

