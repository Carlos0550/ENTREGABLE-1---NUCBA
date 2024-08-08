function repeatArray(array, multiplicador) {
    let result = '';
    
    if (array.length > 0) {
        console.log("Valores del array: ", array);
        alert("Revisa la consola para ver el resultado");

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const parseElement = parseInt(element);

            if (isNaN(parseElement)) {
                alert(`El elemento "${element}" no es un número válido, revise el array...`);
                return;  
            }

            result += `${i + 1} x ${multiplicador} = ${(parseElement) * multiplicador}\n`;
        }

        alert(result);

    } else {
        alert("El array está vacío");
    }
}

const arr = ["1", "2", "3", "4", "5", "6", "7", 8, 9, 10];
repeatArray(arr, 3);
