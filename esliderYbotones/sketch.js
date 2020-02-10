let laVerdad01;
let laOpcion;
let elBoton01,elBoton02,elSlider01,elSlider02,elSlider03,elSlider04;


function setup() {
    createCanvas(800,500);
    background(50);
    laVerdad01 = false;
    laOpcion = false;
    elBoton01 = createButton('comienza Cuadrados');
    elBoton01.mousePressed(comienzaCuadrados);
    elBoton02 = createButton('opcion');
    elBoton02.mousePressed(Opcion);
    elSlider01 = createSlider(0,254);
    elSlider02 = createSlider(0,254);
    elSlider03 = createSlider(0,254);
    elSlider04 = createSlider(0,254);
    noStroke();
}

function comienzaCuadrados() {
    laVerdad01 = !laVerdad01;
    console.log('se apreto el boton');
}

function Opcion() {
    laOpcion = !laOpcion;
}

function draw() {
    // put drawing code here
    //fill(255);
    if(laOpcion){
        fill(elSlider01.value(),elSlider02.value(),elSlider03.value(),elSlider04.value());
        console.log(elSlider01.value());
    } else {
        fill(random(0,elSlider01.value()),random(0,elSlider02.value()),random(0,elSlider03.value()),random(0,elSlider04.value()));
    }

    if(laVerdad01){
        for (let i = 0; i < 100 ; i++){
            rect(random(width),random(height), random(30,80), random(30,80));
        }

    }
}