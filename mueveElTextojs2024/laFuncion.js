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
  dibujaLaEllipse(texto, ctx) {
    let w = ctx.measureText(texto).width * 1.2; // Anchura de la elipse, 20% más grande que el texto
    let h = 30 * 1.5; // Altura de la elipse, 50% más grande que el texto
    // Dibujar la elipse con el color asignado
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(this.elPosX, this.elPosY, w / 2, h / 2, 0, 0, 2 * Math.PI);
    ctx.fill();
    // Dibujar el texto en blanco
    ctx.fillStyle = 'white';
    ctx.fillText(texto, this.elPosX - ctx.measureText(texto).width / 2, this.elPosY + 10); // Ajuste horizontal y vertical
    
    this.mueveElTexto();
  }
  
  // Método para mover el texto y la elipse
  mueveElTexto() {
    // Actualizar la posición del texto y la elipse según su velocidad
    this.elPosX += this.elVeloX;
    this.elPosY += this.elVeloY;
    
    // Invertir la dirección al alcanzar los bordes del canvas
    if (this.elPosX >= window.innerWidth || this.elPosX <= 0) {
      this.elVeloX = -this.elVeloX;
    }
    
    if (this.elPosY >= window.innerHeight || this.elPosY <= 0) {
      this.elVeloY = -this.elVeloY;
    }
  }
}
