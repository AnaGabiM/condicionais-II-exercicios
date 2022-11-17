console.log("teste 1")
const numero = prompt ("Digite um número");

//1
if (numero % 2 !== 0 ) {
    if (numero % 3 === 0) {
    console.log("Divisivel por 3")
    } else {
        console.log("Nao divisivel por 2 ou 3")
    }
} else {
    console.log("Divisivel por 2")
}

//2
if (numero % 2 === 0 || numero % 3 === 0) {
    if (numero % 2 === 0) {
        console.log("Divisivel por 2")
    } else {
        console.log("Divisivel por 3")
    }
} else{
    console.log("Não divisivel por 2 ou 3")
}