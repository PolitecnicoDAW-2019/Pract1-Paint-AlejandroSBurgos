function PaintController(paintView) {
  this.paintView = paintView;

  this.initEvents = function() {
    this.paintView.initPaint();
  };
}
