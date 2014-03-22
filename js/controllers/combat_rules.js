var JJ = JJ || {};

JJ.CombatRules = function() {
  this.combat = function() {
    this.bulletsVsRobots();
    this.bulletsVsCages();
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

  this.bulletsVsCages = function() {
    var cages   = this.filter(function(e) { return e.type == "cage" }),
        bullets = this.filter(function(e) { return e.type == "bullet" });

    for(var b=bullets.length-1;b>=0;b--) {
      var bullet = bullets[b];

      for(var c=cages.length-1;c>=0;c--) {
        var cage = cages[c],
            rect = new pig.Rect(cage.x, cage.y, cage.w, cage.h);

        if(!cage.opened && !bullet._removed && bullet.collide(rect)) {
          this.remove(bullet);
          cage.open();
          break;
        }
      }
    }

  };
}
