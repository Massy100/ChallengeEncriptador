function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muneco = document.getElementById("muneco");

  let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

  if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muneco.src = "./img/kittyEncriptado.jpg";
  } else {
      muneco.src = "./img/kitty.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algún texto");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muneco = document.getElementById("muneco");

  let textoCifrado = texto
    .replace(/ufat/gi, "u")
    .replace(/ober/gi, "o")
    .replace(/ai/gi, "a")
    .replace(/imes/gi, "i")
    .replace(/enter/gi, "e");
  
  if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      muneco.src = "./img/kittyDesencriptado.jpg";
  } else {
      muneco.src = "./img/kitty.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algún texto");
  }
}

function limpiarTexto() {
    let muneco = document.getElementById("muneco");
    let parrafo = document.getElementById("parrafo");
    let tituloMensaje = document.getElementById("titulo-mensaje");

    muneco.src = "./img/kitty.jpg";
    document.getElementById("texto").value = "";
    parrafo.textContent = "";
    tituloMensaje.textContent = "Ingrese el texto que deseas encriptar o desencriptar";
}

async function copiarTexto() {
    var texto = document.getElementById("texto").value;
    
    try {
      await navigator.clipboard.writeText(texto);
      alert("Texto copiado: " + texto);
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
    }
  }
  
  
