
let losElementosid;
let elTitulo;
let elSubTitu;
let laTela;
let elMargen;
let inputTono;
let inputSaturacion;
let inputValor;
let outputTono;
let outputSaturación;
let outputValor;

function setup() {
    // put setup code here

    elMargen = '45px';


    elTitulo = createElement('h1',"Tono Saturación Valor").style('font-family','sans-serif').style('margin-left',elMargen);

    elSubTitu =  createElement('h2',"Pagina Web para explorar HSB").style('font-family','sans-serif').style('margin-left',elMargen);

    laTela = createCanvas(800,200).style('margin-left',elMargen);

    background(0);

    createP();
    createP("Tono    :    input").style('font-family','sans-serif').style('margin-left',elMargen).style('display','inline');
    inputTono = createInput().style('margin-left',elMargen);
    createP("output").style('font-family','sans-serif').style('margin-left',elMargen).style('display','inline');
    outputTono = createInput().style('margin-left',elMargen);
    createP();
    createP("Saturación    :    input").style('font-family','sans-serif').style('margin-left',elMargen).style('display','inline');


    inputSaturacion = createInput().style('margin-left',elMargen);
    createP("output").style('font-family','sans-serif').style('margin-left',elMargen).style('display','inline');
    outputSaturación = createInput().style('margin-left',elMargen).style('display','box');
    createP();
    colorMode(HSB,360,100,100);

    createP("Valor    :    input").style('font-family','sans-serif').style('margin-left',elMargen).style('display','inline');

    inputValor = createInput().style('margin-left',elMargen);
    createP("output").style('font-family','sans-serif').style('margin-left',elMargen).style('display','inline');
    outputValor = createInput().style('margin-left',elMargen);


}

function draw() {
    // put drawing code here
    background(inputTono.value(),inputSaturacion.value(),inputValor.value());


    outputTono.value(inputTono.value());
    outputSaturación.value(inputSaturacion.value());
    outputValor.value(inputValor.value());

}