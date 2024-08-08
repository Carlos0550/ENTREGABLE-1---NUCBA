function repeatArray(array) {
    if (array.length > 0 ) {
        alert("Revisa la consola para ver el resultado")
        console.log("Valores del array: ",array)
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (i === 5) {
                console.log("Me saltee la quinta posicion porque si👋")
                continue
            }
            console.log(element)
        }
    }else{
        alert("El array esta vacio")
    }


}

const arr = ["0", "1", "2", "3", "4", "5", "6", "7"]

repeatArray(arr)