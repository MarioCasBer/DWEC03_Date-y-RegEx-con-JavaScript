let abc = 'abcdefghijklmnopqrstuvwxyz';
let palabra = document.getElementById('palabraInt');

function codificarPalabra(palabra){
    var palabraCodificada = '';
    for (let i = 0; i < palabra.length; i++) {  //Extraemos cada caracter de la cadena uno a uno
        var caracter = palabra[i];
        var posicionCaracter = abc.indexOf(caracter);  /*buscamos la posición del caracter extraido en nuestro alfabeto abc
                                                         NOTA: si el caracter no se encuentra, indexOf devolverá -1 */
    
        if (posicionCaracter !== -1){  //Si el caracter se encuentra en nuestra cadena abc, se sumará 5 y se guardará ese nuevo caracter
            var nuevaPosicion = (posicionCaracter + 5) % abc.length; //si se sale de la cadena, empezará a contar desde el principio
            palabraCodificada += abc[nuevaPosicion];
        }
        else{  //Si no se encuentra el caracter (index -1) se guardará el caracter directamente (sin codificar)
            palabraCodificada += caracter;
        }
    }
    return palabraCodificada;
}

function descodificarPalabra(palabraCod){
    var palabraDescodificada = '';
    for (let i = 0; i < palabraCod.length; i++) {
        var caracter = palabraCod[i];
        var posicionCaracter = abc.indexOf(caracter);

        if (posicionCaracter !== -1){
            var nuevaPosicion = (posicionCaracter - 5 + abc.length) % abc.length;  //evitamos numeros negativos y que se salga de la cadena
            palabraDescodificada += abc[nuevaPosicion];
        }
        else{
            palabraDescodificada += caracter;
        }
    }
    return palabraDescodificada;
}

//INTERACCIÓN ENTRE LA PÁGINA WEB Y LA LÓGICA DE CODIFICACIÓN DE LAS FUNCIONES

function codificar(){
    let palabra = document.getElementById('palabraInt').value.toLowerCase();
    let palabraCod = codificarPalabra(palabra);
    document.getElementById('resultado').innerText = "La palabra codificada es: " + palabraCod;
}

function descodificar(){
    let palabra = document.getElementById('palabraInt').value.toLowerCase();
    let palabraDescod = descodificarPalabra(palabra);
    document.getElementById('resultado').innerText = "La palabra descodificada es: " + palabraDescod;
}
/*NOTA: en ambos casos capturamos el contenido de la caja de texto y la procesamos para que los caracteres estén en minúscula.
Después llamamos a la función definida anteriormente (la que necesitemos) y le pasamos como argumento el texto capturado.
Por último modificamos el contenido de la etiqueta de párrafo con id="resultado" con el nuevo texto y el valor obtenido de la función utilizada.*/