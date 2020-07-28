let sliderTono;
let sliderValor;
let sliderSaturacion;
let losElementosid;
let elTitulo;
let elSubTitu;
let laTela;

function setup() {
    // put setup code here
    elTitulo = createElement('h1',"Tono Saturación Valor");
    elTitulo.addClass('estaClase');
    elSubTitu =  createElement('h2',"Pagina Web para explorar HSB");
    elSubTitu.addClass('estaClase');
    laTela = createCanvas(400,400);
    laTela.addClass('estaClase');
    background(0);
    createP("Tono").addClass('estaClase');;
    sliderTono = createSlider(0,360,0);
    sliderTono.addClass('estaClase');
    createP("Saturación").addClass('estaClase');;
    sliderSaturacion = createSlider(0,100,0);
    sliderSaturacion.addClass('estaClase');
    colorMode(HSB,360,100,100);
    createP("Valor").addClass('estaClase');;
    sliderValor = createSlider(0,100,0);
    sliderValor.addClass('estaClase');

}

function draw() {
    // put drawing code here
    background(sliderTono.value(),sliderSaturacion.value(),sliderValor.value());

}
