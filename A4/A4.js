const mostrarAnteriores = (num) =>{
    let nums = '';
    for (let i = 0; i < num; i++) {
        console.log(`Número ${i}`);
        nums += `Número ${i + 1}\n`;  

    }
    alert(nums)

}

const numero = prompt("Ingrese un numero")
mostrarAnteriores(numero)
