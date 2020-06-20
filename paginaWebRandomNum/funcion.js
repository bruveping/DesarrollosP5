let entrada01 = document.getElementById('entrada01');
let entrada02 = document.getElementById('entrada02');
let elBoton = document.getElementById('elBoton');
let elResultado = document.getElementById('elResultado');
let x = 7;
let y = 7;
let elString = 'El resultado es: ';
//entrada01.addEventListener('input', updateValue);
//entrada02.addEventListener('input', updateValue);

entrada01.addEventListener('input', cambiaElvalor01);

function cambiaElvalor01(elValor) {
  x =  parseFloat(elValor.srcElement.value);
}

entrada02.addEventListener('input', cambiaElvalor02);

function cambiaElvalor02(elValor) {
  y =  parseFloat(elValor.srcElement.value);
}


elBoton.addEventListener('click', function(event){

console.log(x);
    for (let i = 0; i < x; i++) {
       let eLnumero =  parseInt(Math.random() * 1000000000 % y);
       elString = elString + eLnumero + ' '; 
        elResultado.textContent = elString;
    }
});