const verificarNum = (num1, num2) => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (isNaN(numero1)) {
        alert("El primer número insertado es inválido");
        return;
    }

    if (isNaN(numero2)) {
        alert("El segundo número insertado es inválido");
        return;
    }

    switch (true) {
        case numero1 > numero2:
            alert("El primer número es mayor que el segundo");
            break;
        case numero1 < numero2:
            alert("El segundo número es mayor que el primero");
            break;
        default:
            alert("Ninguno es mayor, los dos son iguales");
            break;
    }
};

const num1 = prompt("Ingrese el primer número:");
const num2 = prompt("Ingrese el segundo número:");
verificarNum(num1, num2);
