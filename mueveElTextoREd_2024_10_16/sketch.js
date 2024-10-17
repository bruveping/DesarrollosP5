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
    
    // Mover el texto y la elipse
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
