let sliderTono;
let sliderValor;
let sliderSaturacion;

function setup() {
    // put setup code here
        createElement('h1',"Tono Saturación Valor");
    createElement('h2',"Pagina Web para explorar HSB");
    createCanvas(400,400);
    background(0);
    createP("Tono");
    sliderTono = createSlider(0,360,0);
        createP("Saturación");
    sliderSaturacion = createSlider(0,100,0);
    colorMode(HSB,360,100,100);
    createP("Valor");
    sliderValor = createSlider(0,100,0);

}

function draw() {
    // put drawing code here
   background(sliderTono.value(),sliderSaturacion.value(),sliderValor.value());

}