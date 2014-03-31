var JJ = JJ || {};

JJ.Constants = {
  // MAP CONSTANTS
  TILE_W: 40,
  TILE_H: 40,
  SCREEN_W: 640,
  SCREEN_H: 480,

  // PLAYER CONSTANTS
  PLAYER_SPEED: 200,
  BULLET_SPEED: 400,
  FIRING_DELAY: 0.5,

  // NPC CONSTANTS
  ROBOT_SPEED: 60,
  ROBOT_WALK_TIME: 1
};

JJ.Assets = {
  BULLET: "graphics/bullet.png",
  EMPTY_CAGE: "graphics/cage_empty.png",
  ROBOT_CAGE: "graphics/cage_beast.png",
  OPEN_CAGE: "graphics/cage_open.png",
  CURSOR: "graphics/cursor.png",
  QUESTION: "graphics/question.png",
  TILES: "graphics/tiles.png",
  FLOOR: "graphics/floor.png",
  WALL: "graphics/wall.png",
  JANET: "graphics/janet.png",
  ROBOT: "graphics/robot.png"
}

JJ.PaletteItems = {
  FLOOR: JJ.Assets.FLOOR,
  WALL: JJ.Assets.WALL,
  ROBOT: JJ.Assets.ROBOT,
  EMPTY_CAGE: JJ.Assets.EMPTY_CAGE,
  ROBOT_CAGE: JJ.Assets.ROBOT_CAGE,
}

JJ.ConstantsUI = {
  // PLAYER CONSTANTS
  PLAYER_SPEED: {
    name: "Janet Speed",
    desc: "How fast Janet moves (in pixels per second)"
  },
  BULLET_SPEED: {
    name: "Bullet Speed",
    desc: "How fast Janet's bullets move (in pixels per second)"
  },
  FIRING_DELAY: {
    name: "Firing Delay",
    desc: "How much time it takes for Janet's blaster to shoot (in seconds)"
  },
  ROBOT_SPEED: {
    name: "Robot Speed",
    desc: "How fast the enemy robots move (in pixels per second)"
  },
  ROBOT_WALK_TIME: {
    name: "Robot Walk Time"
  }
}
