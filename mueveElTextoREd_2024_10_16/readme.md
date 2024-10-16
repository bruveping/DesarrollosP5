# mueve texto en red
## arte conceptual código

Claro, el arte conceptual rompe las barreras entre la forma y la idea. En esta pieza de codeart, el código en sí mismo no es solo funcional sino también simbólico. Este sketch se puede interpretar como una representación de la interacción y la conexión humana.
Interactividad y Movimiento: Las palabras ("personas", "grupos", "instituciones") se mueven aleatoriamente por el espacio del canvas, reflejando la aleatoriedad y el dinamismo de las interacciones humanas en la vida real. Esta aleatoriedad puede interpretarse como la imprevisibilidad de nuestras conexiones diarias.
Conexiones Visuales: Las líneas que conectan las palabras actúan como puentes entre estos conceptos, simbolizando la interconectividad entre diferentes aspectos de la sociedad. La red de líneas puede interpretarse como la estructura social, invisible pero omnipresente, que sostiene a las comunidades humanas.
Color y Forma: Las elipses coloridas que rodean cada palabra no solo sirven para mejorar la estética visual, sino que también representan la diversidad y la individualidad dentro de la colectividad. Cada palabra tiene su propio color, simbolizando la unicidad de cada individuo o concepto dentro del conjunto más amplio de la sociedad.
Temporalidad y Cambio: La animación continua y el movimiento dentro del canvas reflejan la naturaleza siempre cambiante de la vida y las relaciones humanas. En este sentido, el código se transforma en una metáfora de la temporalidad y el cambio constante en la sociedad.
Fondo y Contexto: El fondo oscuro puede simbolizar el universo de posibilidades en el que estas interacciones ocurren. Es el lienzo sobre el cual se desarrollan las acciones y eventos de la vida, un recordatorio de que todas las conexiones y relaciones tienen un contexto mayor.
En resumen, esta pieza de codeart es un microcosmos de las interacciones sociales y la estructura de la sociedad. Utiliza movimiento, color y conectividad para transmitir una visión del mundo donde cada elemento, por separado y en conjunto, tiene importancia y significado.


// Declaración de los arrays que almacenarán las cadenas y los objetos de texto
let losStrings = [];
let losTextos = [];

// Configuración inicial del canvas y los textos
function setup() {
  // Crear un canvas del tamaño de la ventana
  createCanvas(windowWidth, windowHeight);
  // Establecer el tamaño del texto
  textSize(30);
  // Inicializar el array con las cadenas de texto
  losStrings = [
    "personas", "grupos", "etnias", "instituciones", "servicios", 
    "puestos de trabajo", "fronteras", "países", "leyes", "imaginarios", 
    "hábitos", "modos de existencia", "tipos de sexualidad", "prácticas artísticas"
  ];
  
  // Crear objetos 'lasLetras' para cada cadena de texto y añadirlos al array losTextos
  for (let i = 0; i < losStrings.length; i++) {
    losTextos.push(new lasLetras(random(width), random(height), random(-2, 2), random(-2, 2)));
  }
  
  // Establecer el color y el grosor de las líneas
  stroke(200, 125, 125);
  strokeWeight(5);
}

// Función de dibujo que se ejecuta en bucle
function draw() {
  // Establecer el color de fondo
  background(100);

  // Dibujar líneas entre los textos
  for (let i = 0; i < losTextos.length; i++) {
    for (let j = i + 1; j < losTextos.length; j++) {
      line(losTextos[i].elPosX, losTextos[i].elPosY, losTextos[j].elPosX, losTextos[j].elPosY);
    }
  }
  
  // Dibujar elipses y textos
  for (let i = 0; i < losTextos.length; i++) {
    losTextos[i].dibujaLaEllipse(losStrings[i]);
  }
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
    this.color = color(random(255), random(255), random(255));
  }
  
  // Método para dibujar la elipse y el texto
  dibujaLaEllipse(texto) {
    let w = textWidth(texto) * 1.2; // Anchura de la elipse, 20% más grande que el texto
    let h = (textAscent() + textDescent()) * 1.5; // Altura de la elipse, 50% más grande que el texto
    // Dibujar la elipse con el color asignado
    fill(this.color);
    ellipse(this.elPosX, this.elPosY, w, h); // Centrar verticalmente
    // Dibujar el texto en blanco
    fill(255);
    text(texto, this.elPosX - textWidth(texto) / 2, this.elPosY + textAscent() / 3); // Ajuste horizontal
    this.mueveElTexto();
  }
  
  // Método para mover el texto y la elipse
  mueveElTexto() {
    // Actualizar la posición del texto y la elipse según su velocidad
    this.elPosX += this.elVeloX;
    this.elPosY += this.elVeloY;
    
    // Invertir la dirección al alcanzar los bordes del canvas
    if (this.elPosX >= width || this.elPosX <= 0) {
      this.elVeloX = -this.elVeloX;
    }
    
    if (this.elPosY >= height || this.elPosY <= 0) {
      this.elVeloY = -this.elVeloY;
    }
  }
}
