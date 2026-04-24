 const etiquetaprecio = document.getElementById("PrecioCam");

        etiquetaprecio.addEventListener("mouseover", function() {
            etiquetaprecio.innerText = "!OFERTA! Precio: 19,99€";
            etiquetaprecio.style.color = "red";
            etiquetaprecio.style.fontWeight = "bold";
            etiquetaprecio.style.fontSize = "xxx-large";
            etiquetaprecio.style.textShadow = "2px 2px 4px #000000";
        });


        etiquetaprecio.addEventListener("mouseout", function() {
            etiquetaprecio.innerText = "Precio: 25,50€";
            etiquetaprecio.style.color = "black";
            etiquetaprecio.style.fontWeight = "normal";
            etiquetaprecio.style.fontSize = "xx-large";
            etiquetaprecio.style.textShadow = "none";
        });

        const imagen = document.getElementById("omni");


        imagen.addEventListener("mouseout", function() {    
            imagen.style.transform = "scale(1)";
            imagen.style.transition = "transform 0.3s ease";
            imagen.style.width = "200px";
        });

        const img = document.getElementById('omni');
  const original = img.src;
  const hover = './descarga.jpeg';

  img.onkeyup = () => img.src = hover;
  img.onkeydown = () => img.src = original;



  const entradanombre = document.getElementById("nombre-usuario");
  const botonEnviar = document.getElementById("enviar");
  const avisoerror = document.getElementById("mensaje-error");


  botonEnviar.addEventListener("click", function() {
    const nombre = entradanombre.value.trim();

    if (nombre === "") {
        avisoerror.textContent = "Por favor, ingresa tu nombre.";
        avisoerror.style.color = "red";
        avisoerror.style.fontFamily = "Verdana, sans-serif";
    } else {
        avisoerror.textContent = `¡Hola, ${nombre}! Gracias por enviar tu nombre.`;
        avisoerror.style.color = "green";
        avisoerror.style.fontFamily = "Verdana, sans-serif";
    }
});


const input = document.getElementById("nombre-usuario");
const imag = document.getElementById("omni");

input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
        imag.src = "./descarga.jpeg";
    } else {
        imag.src = "./dh9bsx1-86060189-0ed1-4e6a-bc9d-369157c31572-2294821212.png";
    }
});