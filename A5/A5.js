const repetirPalabra = (palabra, cant) => {
    let result = '';
    for (let i = 0; i < cant; i++) {
        result += `${palabra}\n`;
    }

    alert(result);
}

let palabra = prompt("Ingrese una palabra: ");
let cant = prompt("¿Cuántas veces lo quiere repetir?");
let cantidad = parseInt(cant);

if (!palabra || palabra.trim() === "") {
    alert("Debe introducir una palabra válida.");
} else if (isNaN(cantidad) || cantidad < 1) {
    alert("La cantidad a repetir debe ser un número mayor a 0");
} else {
    repetirPalabra(palabra, cantidad);
}
