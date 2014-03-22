pig.Grid = function(x, y, w, h, tw, th) {
  pig.Canvas.apply(this);
  var SOLID = "#FFFFFF", EMPTY = "#000000";

  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.tw = tw;
  this.th = th;

  this._columns = w / tw;
  this._rows = h / th;

	this.canvas.width = w ;
	this.canvas.height = h ;
	this.context = this.canvas.getContext('2d') ;

	this.context.fillStyle = EMPTY;
	this.context.fillRect(0, 0, w, h);

  this.setTile = function(tx, ty, solid) {
    this.context.fillStyle = solid ? SOLID : EMPTY;
    this.context.fillRect(tx * this.tw, ty * this.th, this.tw, this.th);
  };

  this.hitTest = function(entity, x, y) {
    if(!entity.graphic.width || !entity.graphic.height) {
      return false;
    }

    var gridArea = this.context.getImageData(x, y, entity.graphic.width, entity.graphic.height),
        gridData = gridArea.data;

    for(var i=0, dataLen = gridData.length; i<dataLen; i+=4) {
      if(gridData[i] != 0) {
        return true;
      }
    }

    return false;
  };

  this.draw = function() {
    this.context.save();
		pig.context.globalAlpha = this.alpha ;

		if(this.ignoreCamera)
			pig.context.translate(Math.floor(this.x), Math.floor(this.y)) ;
		else
			pig.context.translate(Math.floor(this.x + pig.camera.x), Math.floor(this.y + pig.camera.y)) ;

		pig.context.drawImage(this.canvas, 0, 0) ;
		pig.context.restore() ;
  }

  this.update = function(dtime) {
		this.context.clearRect(Math.floor(this.x - 1), Math.floor(this.y - 1), Math.floor(this.width + 1), Math.floor(this.height + 1)) ;
  };
}
