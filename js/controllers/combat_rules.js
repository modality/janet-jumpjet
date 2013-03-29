var JJ = JJ || {};

JJ.CombatRules = function() {
  this.combat = function() {
    this.bulletsVsRobots();
  };

  this.bulletsVsRobots = function() {
    var robots  = this.filter(function(e) { return e.type == "robot" }),
        bullets = this.filter(function(e) { return e.type == "bullet" });

    for(var b=bullets.length-1;b>=0;b--) {
      var bullet = bullets[b];

      for(var r=robots.length-1;r>=0;r--) {
        var robot = robots[r],
            rect = new pig.Rect(robot.x, robot.y, robot.w, robot.h);

        if(!bullet._removed && bullet.collide(rect)) {
          this.remove(robot);
          this.remove(bullet);
          break;
        }
      }
    }
  };
}
