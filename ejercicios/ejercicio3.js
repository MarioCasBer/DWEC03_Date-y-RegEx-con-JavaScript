let codigo = prompt("Introduce un código de 8 dígitos y una letra");

let regex = /^\d{8}[a-zA-Z]$/;  //expresion regular para comenzar con 8 digitos seguidos de una letra y finalizar

while(!regex.test(codigo)){  //mensaje que se irá repitiendo mientras no cumplamos con el formato
    codigo = prompt("El formato introducido no es correcto");
}

if (regex.test(codigo)){
    document.write("<h2>¡El código introducido es correcto!</h2>");
}