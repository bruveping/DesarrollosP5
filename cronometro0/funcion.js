let lasLetras = window;
let laX = document.getElementById('x');
let encendido = document.getElementById('encendido');
let A60 = document.getElementById('a60');
let A30 = document.getElementById('a30');
let A24 = document.getElementById('a24');
let elImput = document.getElementById('elimput');
let Amas = document.getElementById('aumenta');
let Amenos = document.getElementById('disminuye');
let laHora = document.getElementById('estaHora');
let porDondeVoy = document.querySelectorAll('#PorDondeVoy> div');
let x = 0;
let y = 0;
let pasatiempo = 0;
let elLapso = 24;
let elLapso01 = 1;
let enciende = false;
let laCondicional01 = false;
let laAlarma = new Audio('alarmaTimer.wav');

lasLetras.addEventListener('keyup', (e) => {

    if(e.code == 'KeyA'){
        elLapso = 60;        
    }else if(e.code == 'KeyS'){
        elLapso = 30;        
    }else if(e.code == 'KeyD'){
        elLapso = 24;        
    }else if(e.code == 'KeyF'){
        enciende = !enciende; 
        enciendeApaga();
        console.log(e.code);
    }else if(e.code == 'KeyG'){
        let cualeslaY = y % porDondeVoy.length;
        porDondeVoy[cualeslaY].style.background = '#f00';
        y++;       
    }else if(e.code == 'KeyH'){
        for (let i = 0; i < porDondeVoy.length; i ++){
            porDondeVoy[i].style.background = '#aaa';
            y=0;
        }      
    }
    //    if(e.code == 'KeyA'){
    //    console.log(e.code);
    //    }
}

                          );

encendido.addEventListener('click', function(event){
    //    console.log('hola');
    enciende = !enciende;
    enciendeApaga();

});

function enciendeApaga (){

    if(enciende){
        encendido.textContent = 'ON';
        encendido.style.background = '#f00';
    }
    else{
        encendido.textContent = 'OFF';
        encendido.style.background = '#00f';
    } 
}
A60.addEventListener('click', function(event){
    //    console.log('hola');
    elLapso = 60;
    A60.style.background = '#a0f';
    A30.style.background = '#00f';
    A24.style.background = '#00f';
});
A30.addEventListener('click', function(event){
    //    console.log('hola');
    elLapso = 30;
    A60.style.background = '#00f';
    A30.style.background = '#a0f';
    A24.style.background = '#00f';
});
A24.addEventListener('click', function(event){
    //    console.log('hola');
    elLapso = 24;
    A60.style.background = '#00f';
    A30.style.background = '#00f';
    A24.style.background = '#a0f';
});
Amas.addEventListener('click', function(event){
    //    console.log('hola');    
    let cualeslaY = y % porDondeVoy.length;
    porDondeVoy[cualeslaY].style.background = '#f00';
    y++;
});
Amenos.addEventListener('click', function(event){
    //    console.log('hola');
    for (let i = 0; i < porDondeVoy.length; i ++){
        porDondeVoy[i].style.background = '#aaa';
    }
    y = 0;
});

elImput.addEventListener('input', updateValue);

function updateValue(e) {
    laX.textContent = e.srcElement.value;
    elLapso = e.srcElement.value;
    A60.style.background = '#00f';
    A30.style.background = '#00f';
    A24.style.background = '#00f';
}
function todoLoquepasaAqui(){
    //    let elTiempo = new Date();
    //    let elSegundo = elTiempo.getSeconds() % 2;
    //    console.log(elSegundo);
    if(enciende){
        x++;    
        pasatiempo = x % elLapso;
        laHora.textContent = pasatiempo;  
        if(pasatiempo == 0){
            laHora.style.background = '#f00';
            laAlarma.play();
        } else {
            laHora.style.background = '#000';
        }
    } else{
        laHora.textContent = '0'; 
        x = 0;
    }
    //let esto = console.log(x);
}
let valaCosa = setInterval(todoLoquepasaAqui, 1000);