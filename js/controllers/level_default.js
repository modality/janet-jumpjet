var JJ = JJ || {};

JJ.LevelDefault = function() {
  this.game_map.setTile(3, 2, 1);
  this.game_map.setTile(4, 2, 1);
  this.game_map.setTile(5, 2, 1);
  this.game_map.setTile(6, 2, 1);

  this.game_map.setTile(9, 2, 1);
  this.game_map.setTile(10, 2, 1);
  this.game_map.setTile(11, 2, 1);
  this.game_map.setTile(12, 2, 1);

  this.game_map.setTile(3, 3, 1);
  this.game_map.setTile(3, 4, 1);
  this.game_map.setTile(3, 5, 1);
  this.game_map.setTile(3, 6, 1);
  this.game_map.setTile(3, 7, 1);

  this.game_map.setTile(12, 3, 1);
  this.game_map.setTile(12, 4, 1);
  this.game_map.setTile(12, 5, 1);
  this.game_map.setTile(12, 6, 1);
  this.game_map.setTile(12, 7, 1);

  this.game_map.setTile(4, 7, 1);
  this.game_map.setTile(5, 7, 1);

  this.game_map.setTile(5, 8, 1);
  this.game_map.setTile(6, 8, 1);

  this.game_map.setTile(10, 7, 1);
  this.game_map.setTile(11, 7, 1);

  this.game_map.setTile(9, 8, 1);
  this.game_map.setTile(10, 8, 1);

  this.add(new JJ.Cage(160, 120, "robot"));
  this.add(new JJ.Cage(160, 160, "robot"));
  this.add(new JJ.Cage(160, 200, "empty"));
  this.add(new JJ.Cage(160, 240, "robot"));

  this.add(new JJ.Cage(440, 120, "empty"));
  this.add(new JJ.Cage(440, 160, "empty"));
  this.add(new JJ.Cage(440, 200, "robot"));
  this.add(new JJ.Cage(440, 240, "robot"));

  this.add(new JJ.Robot(240, 200));
  this.add(new JJ.Robot(280, 160));
  this.add(new JJ.Robot(320, 200));
  this.add(new JJ.Robot(360, 160));
}
