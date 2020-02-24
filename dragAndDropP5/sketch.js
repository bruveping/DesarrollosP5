let c;
let elAudio;
function setup() {
    c = select('#SuelteAqui');
    noCanvas();
    background(200);
    textAlign(CENTER);
    text('Drag file', width / 2, height / 2);
    //c.dragOver(dragOverCallback);
    c.drop(recibeDocumento);
    createP('hola');
}

// This function will be called whenever
// a file is dragged over the canvas
function dragOverCallback() {
    c.style('background', '#aaa');
}

function recibeDocumento(file){
    createP(file.size);
    createP(file.name);
    createP(file.data);
    createP(file.type);

    if(file.type=='audio'){
    elAudio = new Audio(file.data);
        elAudio.play(); 
    }

}

function primerSonido () {
    elAudio.play();
}
