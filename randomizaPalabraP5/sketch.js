let c;
let elParrafo;
let elDiv;
let x;
let string01;
let string02;
let string03 = [];
let string04;
let elBoton;
let elBoolean;
function setup() {
    c = select('#SuelteAqui');
    noCanvas();
    background(200);
    textAlign(CENTER);
    text('Drag file', width / 2, height / 2);
    //c.dragOver(dragOverCallback);
    c.drop(recibeDocumento);
    elBoolean = false;
    elBoton = createButton('apretame');
    elDiv = createDiv();
    elDiv.id('creaDiv');
    elBoton.mousePressed(repiteProcedimiento);
}

// This function will be called whenever
// a file is dragged over the canvas
function dragOverCallback() {
    c.style('background', '#aaa');
}

function recibeDocumento(file){
    createP(file.size);
    createP(file.name);
    // createP(file.data);
    createP(file.type);

    string01 = file.data;
    string02 = split(string01,' ');
    for(let i = 0; i < string02.length; i++)
    {
        x = int(random(string02.length));
        append(string03, string02[x]);

    }

    string04 = join(string03,' ');
    elParrafo = createP(string04); 
    elDiv.child(elParrafo); 
    elBoolean = true;
}

function repiteProcedimiento () {
    string03 = [];
    if(elBoolean){
        for(let i = 0; i < string02.length; i++)
        {
            x = int(random(string02.length));
            append(string03, string02[x]);

        }
        string04 = join(string03,' ');
        elParrafo = createP(string04); 
        elDiv.child(elParrafo); 

    }

}