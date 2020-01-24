/*http://api.openweathermap.org/data/2.5/weather?q=Buenos+Aires&APPID=ef68648016d9f93a267a85b1c195a30d&units=metric*/
var weather;

var temperatura;
var humedad;
var tempMax;
var tempMin;
var Presion;

function setup() {
  // put setup code here
    preguntaClima();
    setInterval (preguntaClima, 10000);
}

function preguntaClima (){    
    loadJSON('https://api.openweathermap.org/data/2.5/weather?q=Asuncion&APPID=ef68648016d9f93a267a85b1c195a30d&units=metric', tengoElDato);
}

function tengoElDato(data) {
    weather = data;
    if(weather){
        temperatura = document.getElementById('temperatura');
        humedad = document.getElementById('humedad');
        tempMax = document.getElementById('temp_max');
        tempMin = document.getElementById('temp_min');
        Presion = document.getElementById('pressure');
        
        var tempe = weather.main.temp;
        var hume = weather.main.humidity;
        var teMax = weather.main.temp_max;
        var teMin = weather.main.temp_min;
        var Pres = weather.main.pressure;
        
        tempe = tempe + " °C";
        hume = hume + " %";
        teMax = teMax + " °C";
       teMin = teMin + " °C";
       Pres = Pres + " hPa";

temperatura.textContent = tempe;
tempMax.textContent = teMax;                
tempMin.textContent = teMin;   
Presion.textContent = Pres;        
humedad.textContent = hume;                    

}  
}


function draw() {
  // put drawing code here
          
}



