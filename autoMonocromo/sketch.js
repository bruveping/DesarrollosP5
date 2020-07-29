let sliderTono;
let sliderValor;
let sliderSaturacion;
let laTela;
let elMargen;

function setup() {
    elMargen = '45px';

    noCanvas();

    //laTela = createCanvas(800,200).style('margin-left',elMargen);
    laTela = select('#esteCuerpo').style('background','#222');

    sliderTono = createSlider(0,360,0).style('margin-left',elMargen);

    sliderSaturacion = createSlider(0,100,0).style('margin-left',elMargen);

    colorMode(HSB,360,100,100);

    sliderValor = createSlider(0,100,0).style('margin-left',elMargen);
}

function draw() {
    let elColor = color (sliderTono.value(),sliderSaturacion.value(),sliderValor.value());
    laTela.style('background',elColor);
}