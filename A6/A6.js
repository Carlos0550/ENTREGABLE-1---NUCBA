function repeatArray(array) {
    if (array.length > 0 ) {
        alert("Revisa la consola para ver el resultado")
        console.log("Valores del array: ",array)
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(element)
        }
    }else{
        alert("El array esta vacio")
    }


}

const arr = ["Hola", "Soy", "Carlos", "Pelinski", "Tengo 19", "años"]

repeatArray(arr)