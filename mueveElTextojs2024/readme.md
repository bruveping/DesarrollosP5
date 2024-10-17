# Codeart con Canvas

## Descripción

Esta pieza de arte conceptual en código, `Codeart con Canvas`, utiliza elementos visuales y de animación para explorar temas relacionados con la interacción humana y las conexiones sociales. Implementada en JavaScript puro, la obra aprovecha la API de Canvas de HTML5 para crear una visualización dinámica y colorida.

## Concepto

El arte conceptual se centra en las ideas y conceptos detrás de la obra, en lugar de su forma física o estética. En esta obra, los elementos del código no son solo funcionales, sino también simbólicos:

1. **Interactividad y Movimiento**: Las palabras como "personas", "grupos" y "instituciones" se mueven aleatoriamente dentro del canvas, reflejando la aleatoriedad y dinamismo de las interacciones humanas en la vida real.

2. **Conexiones Visuales**: Las líneas que conectan las palabras actúan como puentes entre estos conceptos, simbolizando la interconectividad entre diferentes aspectos de la sociedad. Esta red de líneas representa la estructura social, invisible pero omnipresente.

3. **Color y Forma**: Las elipses coloridas que rodean cada palabra representan la diversidad y la individualidad dentro de la colectividad. Cada palabra tiene su propio color, simbolizando la unicidad dentro del conjunto más amplio de la sociedad.

4. **Temporalidad y Cambio**: La animación continua refleja la naturaleza siempre cambiante de las relaciones humanas y de la vida en general. El código se transforma en una metáfora de la temporalidad y el cambio constante en la sociedad.

5. **Fondo y Contexto**: El fondo oscuro simboliza el universo de posibilidades en el que estas interacciones ocurren. Es el lienzo sobre el cual se desarrollan las acciones y eventos de la vida, un recordatorio de que todas las conexiones y relaciones tienen un contexto mayor.

url:



## Implementación

La obra está implementada en JavaScript puro utilizando la API Canvas de HTML5. El archivo `script.js` contiene el código que genera las animaciones y los elementos gráficos. Para visualizar la obra, se puede utilizar el archivo HTML `index.html` que incluye el script.

### index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codeart con Canvas</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
    }
    canvas {
      display: block;
    }
  </style>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>

// Declaración de los arrays que almacenarán las cadenas y los objetos de texto
let losStrings = [];
let losTextos = [];

window.onload = function () {
  // Crear el canvas
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.font = '30px Arial';
  
  // Inicializar el array con las cadenas de texto
  losStrings = [
    "personas", "grupos", "etnias", "instituciones", "servicios",
    "puestos de trabajo", "fronteras", "países", "leyes", "imaginarios",
    "hábitos", "modos de existencia", "tipos de sexualidad", "prácticas artísticas"
  ];

  // Crear objetos 'lasLetras' para cada cadena de texto y añadirlos al array losTextos
  for (let i = 0; i < losStrings.length; i++) {
    losTextos.push(new lasLetras(Math.random() * canvas.width, Math.random() * canvas.height, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4));
  }
  
  // Establecer el color y el grosor de las líneas
  ctx.strokeStyle = 'rgb(200, 125, 125)';
  ctx.lineWidth = 5;

  function draw() {
    // Establecer el color de fondo
    ctx.fillStyle = 'rgb(100, 100, 100)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar líneas entre los textos
    for (let i = 0; i < losTextos.length; i++) {
      for (let j = i + 1; j < losTextos.length; j++) {
        ctx.beginPath();
        ctx.moveTo(losTextos[i].elPosX, losTextos[i].elPosY);
        ctx.lineTo(losTextos[j].elPosX, losTextos[j].elPosY);
        ctx.stroke();
      }
    }
    
    // Dibujar elipses y textos
    for (let i = 0; i < losTextos.length; i++) {
      losTextos[i].dibujaLaEllipse(losStrings[i], ctx);
    }

    requestAnimationFrame(draw);
  }

  draw();
}

// Clase para gestionar las letras
class lasLetras {
  constructor(posX, posY, veloX, veloY) {
    // Posición y velocidad inicial del texto
    this.elPosX = posX;
    this.elPosY = posY;
    this.elVeloX = veloX;
    this.elVeloY = veloY;
    // Color aleatorio para la elipse
    this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }
  
  // Método para dibujar la elipse y el texto
  dib