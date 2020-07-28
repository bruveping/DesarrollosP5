let sliderTono;
let sliderValor;
let sliderSaturacion;
let losElementosid;
let elTitulo;
let elSubTitu;
let laTela;
let elMargen;
let imputTono;
let imputSaturacion;
let imputValor;

function setup() {
    // put setup code here

    elMargen = '45px';


    elTitulo = createElement('h1',"Tono Saturación Valor").style('font-family','sans-serif').style('margin-left',elMargen);

    elSubTitu =  createElement('h2',"Pagina Web para explorar HSB").style('font-family','sans-serif').style('margin-left',elMargen);

    laTela = createCanvas(800,200).style('margin-left',elMargen);

    background(0);
    createP("Tono").style('font-family','sans-serif').style('margin-left',elMargen);
    sliderTono = createSlider(0,360,0).style('margin-left',elMargen);
    imputTono = createInput().style('margin-left',elMargen);

    createP("Saturación").style('font-family','sans-serif').style('margin-left',elMargen);

    sliderSaturacion = createSlider(0,100,0).style('margin-left',elMargen);
    imputSaturacion = createInput().style('margin-left',elMargen);

    colorMode(HSB,360,100,100);

    createP("Valor").style('font-family','sans-serif').style('margin-left',elMargen);
    sliderValor = createSlider(0,100,0).style('margin-left',elMargen);
    imputValor = createInput().style('margin-left',elMargen);


}

function draw() {
    // put drawing code here
    background(sliderTono.value(),sliderSaturacion.value(),sliderValor.value());
    imputTono.value(sliderTono.value());
    imputSaturacion.value(sliderSaturacion.value());
    imputValor.value(sliderValor.value());

}
