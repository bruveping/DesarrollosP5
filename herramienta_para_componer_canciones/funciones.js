// Función para contar sílabas básicas
function contarSilabas(frase) {
    const vocales = "aeiouáéíóúü";
    const diptongos = [
      "ai", "au", "ei", "eu", "oi", "ou", "iu", "ui", 
      "ia", "ie", "io", "ua", "ue", "uo", "üe", "üi"
    ];
  
    // Normalizar la frase
    frase = frase.toLowerCase().replace(/[^a-záéíóúü\s]/g, "").trim();
  
    let palabras = frase.split(/\s+/);
    let totalSilabas = 0;
  
    for (let palabra of palabras) {
      let silabas = 0;
      let i = 0;
  
      while (i < palabra.length) {
        if (i < palabra.length - 1 && diptongos.includes(palabra[i] + palabra[i + 1])) {
          silabas++;
          i += 2;
        } else if (vocales.includes(palabra[i])) {
          silabas++;
          i++;
        } else {
          i++;
        }
      }
  
      totalSilabas += silabas;
    }
  
    return totalSilabas;
  }
  
  // Función para contar sílabas por línea
  function contarSilabasPorLinea(texto) {
    const lineas = texto.split("\n");
    const resultados = [];
    let seccionActual = "";
  
    lineas.forEach((linea, index) => {
      const lineaTrim = linea.trim();
  
      if (lineaTrim.startsWith("[")) {
        // Detectar secciones marcadas entre corchetes, ej. [verso]
        seccionActual = lineaTrim.replace(/\[|\]/g, "").toLowerCase();
        resultados.push(`${seccionActual}`);
      } else if (lineaTrim === "") {
        resultados.push("espacio");
      } else {
        const silabas = contarSilabas(lineaTrim);
        resultados.push(`Línea ${index + 1}: ${silabas} sílabas`);
      }
    });
  
    return resultados.join("\n");
  }
  
  // Referencias a los elementos HTML
  const poetryInput = document.getElementById("poetryInput");
  const syllableResults = document.getElementById("syllableResults");
  
  // Evento de entrada para actualizar el conteo en tiempo real
  poetryInput.addEventListener("input", () => {
    const texto = poetryInput.value;
    const resultados = contarSilabasPorLinea(texto);
    syllableResults.textContent = resultados;
  });
  