//DESCOMENTAR LA SIGUIENTE LÍNEA PARA BORRAR LOCALSTORAGE:
//localStorage.removeItem('cumpleaños');

let fechaGuardada = localStorage.getItem('cumpleaños');

if (fechaGuardada){
    document.write("Su cumpleaños es el " + fechaGuardada);
}
else{
    let formato1 = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{2}$/;  //dd-mm-aa
    let formato2 = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{2}$/;  //dd/mm/aa

    let fecha = prompt("Introduce tu fecha de nacimiento");

    while (!formato1.test(fecha) && !formato2.test(fecha)){  // Repite mientras la fecha no sea válida
        fecha = prompt("Formato incorrecto. Introduce la fecha en un formato válido dd-mm-aa o dd/mm/aa.");
    }
    // Guardamos la fecha en localStorage y la mostramos en la página
    localStorage.setItem('cumpleaños', fecha);
    document.write("Su cumpleaños es el " +fecha);
}