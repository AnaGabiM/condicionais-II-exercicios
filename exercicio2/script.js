let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();
/*
if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/

console.log("teste 2")

switch (nacionalidade) {
    case "brasileira" :
         console.log("A pessoa é do Brasil")
         break;
   case "argentina" :
        console.log("A pessoa é da Argentina")
        break;
    case "uruguaia" :
        console.log("A pessao é do uruguai")
        break;
    case "chilena" :
        console.log("A pessoa é do chile")
        break;
    case "colombiana" :
        console.log("A pessoa é da colombia")
        break;
    default:
        console.log("Nacionalidade não encontrada")
}