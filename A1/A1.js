const parOImpar = (num) => {
    const numero = parseInt(num);
    
    if (isNaN(numero)) {
        alert("Debe introducir un número válido");
        return;
    }

    if (numero % 2 === 0) {
        return `El número ${numero} es par`;
    } else {
        return `El número ${numero} es impar`;
    }
};

let continuar = true;

while(continuar){
    const num = prompt("Ingrese un número (o escriba 'salir' para terminar): ");
    
    if (num.toLowerCase() === 'salir') {
        continuar = false;
    } else {
        const resultado = parOImpar(num);
        if (resultado) {
            alert(resultado);
        }
    }
}
