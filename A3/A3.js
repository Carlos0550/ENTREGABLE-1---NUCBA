const multiplo = (num) => {
    const numero = parseInt(num);
    
    if (isNaN(numero)) {
        alert("Debe introducir un número válido");
        return;
    }

    if (numero % 5 === 0) {
        alert(`El número ${numero} es multiplo de 5`);
    } else {
        alert(`El número ${numero} no es multiplo de 5`);
    }
};

const numero = prompt("Ingrese un numero")
multiplo(numero)
