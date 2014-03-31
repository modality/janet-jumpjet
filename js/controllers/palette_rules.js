var JJ = JJ || {};

JJ.PaletteRules = function(cursor) {
  cursor.mouseDown = function() {
    var to_paint = $('.palette-item.selected').data('name');

    var tile_x = Math.floor(pig.mouse.x / JJ.Constants.TILE_W);
    var tile_y = Math.floor(pig.mouse.y / JJ.Constants.TILE_H);

    var tile_abs_x = tile_x * JJ.Constants.TILE_W;
    var tile_abs_y = tile_y * JJ.Constants.TILE_H;

    if(to_paint == "FLOOR") {
      var ents = pig.world.filter(function(e) {
        return e.type == "cage" ||
               e.type == "robot" ||
               e.type == "question";
      });

      // remove all entities under cursor
      var cursorRect = cursor.getRect();
      for(var e=0;e<ents.length;e++) {
        if(ents[e].collide(cursorRect)) {
          pig.world.remove(ents[e]);
        }
      }

      pig.world.game_map.setTile(tile_x, tile_y, 0);
    } else if(to_paint == "WALL") {
      pig.world.game_map.setTile(tile_x, tile_y, 1);
    } else if(to_paint == "ROBOT") {
      pig.world.add(new JJ.Robot(tile_abs_x, tile_abs_y));
    } else if(to_paint == "EMPTY_CAGE") {
      pig.world.add(new JJ.Cage(tile_abs_x, tile_abs_y, "empty"));
    } else if(to_paint == "ROBOT_CAGE") {
      pig.world.add(new JJ.Cage(tile_abs_x, tile_abs_y, "robot"));
    }
  };
}

