function PaintView() {
  this.context = GUI.canvas.getContext('2d');
  this.initPaint = function() {
    GUI.canvas.addEventListener('click', this.draw);
    GUI.buttonExport.addEventListener('click', this.exportImage);
    GUI.buttonClean.addEventListener('click', this.cleanScreen);
  };

  this.getCurrentDrawStyle = function() {
    return Array.from(GUI.inputPrint).find(input => input.checked);
  };

  this.draw = event => {
    const drawForm = {
      Default: this.Default,
      Circle: this.Circle,
      Square: this.Square,
      Triangle: this.Triangle
    };
    const options = {
      positionX: event.clientX - GUI.canvas.offsetLeft,
      positionY: event.clientY - GUI.canvas.offsetTop
    };
    const currentDrawStyle = this.getCurrentDrawStyle().value;
    drawForm[currentDrawStyle](options);
  };

  this.exportImage = function() {
    const image = GUI.canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    GUI.buttonExport.setAttribute('href', image);
  };

  //TODO REFACTORY
  this.Circle = options => {
    this.context.beginPath();
    this.context.arc(
      options.positionX,
      options.positionY,
      GUI.inputSize.value,
      0,
      Math.PI * 2
    );
    this.context.strokeStyle = GUI.inputColor.value;
    this.context.stroke();
  };
  //TODO REFACTORY
  this.Triangle = function(options) {
    /*const context = GUI.canvas.getContext('2d');
    context.beginPath();
    context.moveTo(
      options.positionX - GUI.canvas.offsetLeft,
      options.positionY - GUI.canvas.offsetTop
    );
    context.lineTo(
      options.positionX - GUI.canvas.offsetLeft,
      options.positionY - GUI.canvas.offsetTop + 10
    );
    context.lineTo(
      options.positionX + 10,
      options.positionY - GUI.canvas.offsetTop + 10
    );
    context.closePath();
    context.lineWidth = 1;
    context.strokeStyle = '#FFFFFF';
    context.stroke();*/
  };
  //TODO REFACTORY
  this.Square = options => {
    this.context.beginPath();
    this.context.rect(
      options.positionX,
      options.positionY,
      GUI.inputSize.value,
      GUI.inputSize.value
    );
    this.context.strokeStyle = GUI.inputColor.value;
    this.context.stroke();
  };

  this.Default = options => {
    this.context.beginPath();
    this.context.arc(
      options.positionX,
      options.positionY,
      GUI.inputSize.value,
      0,
      Math.PI * 2
    );
    this.context.strokeStyle = GUI.inputColor.value;
    this.context.stroke();
    this.context.fillStyle = GUI.inputColor.value;
    this.context.fill();
  };
  this.cleanScreen = function() {
    const context = GUI.canvas.getContext('2d');
    context.clearRect(0, 0, GUI.canvas.width, GUI.canvas.height);
  };
}
