
var elTamano;
var divisor;
var elAncho;

function setup() {
createCanvas(displayWidth,displayHeight);
//fullScreen();
divisor = 300;
elTamano = height/divisor;
elAncho = width/divisor;
textSize(elTamano);
fill(0,255,0);
frameRate(12);
  // put setup code here
}

function draw() {
  background(0);
  for(var i= 0; i<divisor; i++){
      for(var j= 0; j<divisor; j++){
    var elNumero = int(random(10))%2;
text(elNumero,elAncho*j,elTamano*i);}}
  // put drawing code here
}
