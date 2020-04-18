/*variables que recuperan Dom del index*/
var lasvarras = window;
var laX = document.getElementById('x');
var encendido = document.getElementById('encendido');
var A60 = document.getElementById('a60');
var A30 = document.getElementById('a30');
var A24 = document.getElementById('a24');
var elImput = document.getElementById('elimput');
var Amas = document.getElementById('aumenta');
var Amenos = document.getElementById('disminuye');
var laHora = document.getElementById('estaHora');
var porDondeVoy = document.querySelectorAll('#PorDondeVoy> div');
var botonSeg = document.getElementById('botonSeg');
var botonMin = document.getElementById('botonMin');
var botonHor = document.getElementById('botonHor');
/*Variables internas del programa*/
var x = 0;
var y = 0;
var valorActual = 0;
var pasatiempo = 0;
var elLapso = 24;
var elLapso01 = 1;
var laAlarma = new Audio('alarmaTimer.wav');
var elBotonSeg = 0;
var elBotonMin = 0;
var elBotonHor = 0;

/*las condicionales*/
var enciende = false;
var laCondicional01 = false;

/*Funciones del programa*/

/*Funciones del Reloj y la Fecha*/
var actualizarHora = function(){
    var fecha = new Date (),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getUTCMonth(),
        year = fecha.getFullYear();

    var pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pYear = document.getElementById('year');


    var semana =['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    if(horas < 10){
        horas = "0" + horas;
    }
    if(minutos < 10){
        minutos = "0" + minutos;
    }
    if(segundos < 10){
        segundos = "0" + segundos;
    }

    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;
    pMes.textContent = meses[mes];
    pHoras.textContent = horas;
    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;
    pYear.textContent = year;

};

/*funciones del teclado*/
lasvarras.addEventListener('keyup', (e) => {

    if(e.code == 'KeyA'){
        elLapso = 60; 
        A60.style.background = '#a0f';
        A30.style.background = '#00f';
        A24.style.background = '#00f';
        laX.textContent = elLapso;
    }else if(e.code == 'KeyS'){
        elLapso = 30;  
        A60.style.background = '#00f';
        A30.style.background = '#a0f';
        A24.style.background = '#00f';
        laX.textContent = elLapso;
    }else if(e.code == 'KeyD'){
        elLapso = 24;   
        A60.style.background = '#00f';
        A30.style.background = '#00f';
        A24.style.background = '#a0f';
        laX.textContent = elLapso;
    }else if(e.code == 'KeyF'){
        enciende = !enciende; 
        enciendeApaga();
   if(enciende == false){
       x = 0;
   }
    }else if(e.code == 'KeyG'){
        var cualeslaY = y % porDondeVoy.length;
        porDondeVoy[cualeslaY].style.background = '#f00';
        y++;       
    }else if(e.code == 'KeyH'){
        for (var i = 0; i < porDondeVoy.length; i ++){
            porDondeVoy[i].style.background = '#aaa';
            y=0;
        }     

    }
}
                          );

/*Enciende el programa contador*/
encendido.addEventListener('click', function(event){
    //    console.log('hola');
    enciende = !enciende;
    enciendeApaga();
  if(enciende == false){
       x = 0;
   }
});

function enciendeApaga (){
    if(enciende){
        encendido.textContent = 'ON (f)';
        encendido.style.background = '#f00';
    }
    else{
        encendido.textContent = 'OFF (f)';
        encendido.style.background = '#00f';
    } 
}
/*aqui se agregan lapsos de tiempo*/
A60.addEventListener('click', function(event){
    elLapso = 60;
    A60.style.background = '#a0f';
    A30.style.background = '#00f';
    A24.style.background = '#00f';
    laX.textContent = elLapso;
});
A30.addEventListener('click', function(event){
    elLapso = 30;
    A60.style.background = '#00f';
    A30.style.background = '#a0f';
    A24.style.background = '#00f';
    laX.textContent = elLapso;
});
A24.addEventListener('click', function(event){
    elLapso = 24;
    A60.style.background = '#00f';
    A30.style.background = '#00f';
    A24.style.background = '#a0f';
    laX.textContent = elLapso;
});
/*se marca el momento en el cual esta el usuaro*/
Amas.addEventListener('click', function(event){   
    var cualeslaY = y % porDondeVoy.length;
    porDondeVoy[cualeslaY].style.background = '#f00';
    y++;
});
Amenos.addEventListener('click', function(event){
    for (var i = 0; i < porDondeVoy.length; i ++){
        porDondeVoy[i].style.background = '#aaa';
    }
    y = 0;
});
/*Aqui se ingresa un lapso personalizado*/
elImput.addEventListener('input', updateValue);
botonSeg.addEventListener('click', function(event){
    elLapso01=1;

    botonHor.style.background = '#0ff';
    botonMin.style.background = '#0ff';
    botonSeg.style.background = '#d40';
    laX.textContent = parseFloat(valorActual) * elLapso01;
    elLapso = parseFloat(valorActual)*elLapso01;
    A60.style.background = '#00f';
    A30.style.background = '#00f';
    A24.style.background = '#00f'; 
});
botonMin.addEventListener('click', function(event){
    elLapso01=60;
    botonHor.style.background = '#0ff';
    botonMin.style.background = '#d40';
    botonSeg.style.background = '#0ff';
    laX.textContent = parseFloat(valorActual) * elLapso01;
    elLapso = parseFloat(valorActual)*elLapso01;
    A60.style.background = '#00f';
    A30.style.background = '#00f';
    A24.style.background = '#00f'; 
});
botonHor.addEventListener('click', function(event){
    elLapso01=3600;
    botonHor.style.background = '#d40';
    botonMin.style.background = '#0ff';
    botonSeg.style.background = '#0ff';
    laX.textContent = parseFloat(valorActual) * elLapso01;
    elLapso = parseFloat(valorActual)*elLapso01;
    A60.style.background = '#00f';
    A30.style.background = '#00f';
    A24.style.background = '#00f'; 
});
function updateValue(e) {
    valorActual = e.srcElement.value;
    laX.textContent = parseFloat(valorActual) * elLapso01;
    elLapso = parseFloat(valorActual)*elLapso01;
    A60.style.background = '#00f';
    A30.style.background = '#00f';
    A24.style.background = '#00f'; 
}
function todoLoquepasaAqui(){
    actualizarHora();
    if(enciende){
        x++; 
        var pasatiempo01 = x % elLapso;
        pasatiempo = Math.abs(elLapso -(x % elLapso));
        elBotonSeg = parseInt(pasatiempo % 60);
        elBotonMin = parseInt((pasatiempo / 60) % 60, 10);
        elBotonHor = parseInt(pasatiempo/3600, 10);

        laHora.textContent = elBotonHor+':'+elBotonMin+':'+elBotonSeg; 
        if(elBotonSeg<10){
            laHora.textContent = elBotonHor+':'+elBotonMin+':0'+elBotonSeg;  
        }if(elBotonMin<10){
            laHora.textContent = elBotonHor+':0'+elBotonMin+':'+elBotonSeg;  
        }if(elBotonHor<10){
            laHora.textContent = '0'+elBotonHor+':'+elBotonMin+':'+elBotonSeg;  
        }if(elBotonHor<10&&elBotonMin<10){
            laHora.textContent = '0'+elBotonHor+':0'+elBotonMin+':'+elBotonSeg;  
        }if(elBotonHor<10&&elBotonSeg<10){
            laHora.textContent = '0'+elBotonHor+':'+elBotonMin+':0'+elBotonSeg;  
        }if(elBotonMin<10&&elBotonSeg<10){
            laHora.textContent = elBotonHor+':0'+elBotonMin+':0'+elBotonSeg;  
        }if(elBotonHor<10&&elBotonMin<10&&elBotonSeg<10){
            laHora.textContent = '0'+elBotonHor+':0'+elBotonMin+':0'+elBotonSeg;  
        }


        if(pasatiempo01 == 0){
            laHora.style.background = '#f00';
            laAlarma.play();
        } else {
            laHora.style.background = '#000';
        }
    } else{
        laHora.textContent = '0'; 
        x = 0;
    }
}


var valaCosa = setInterval(todoLoquepasaAqui, 1000);

function primerSonido () {
    laAlarma.play();
}
