
//Condicionales

let nombre = prompt("Ingresa tu nombre");
let edad = prompt("ingresa tu edad ");

if (edad >=18){
    console.log("Puedes ver peliculasviolentas");
} else{
    console.log("No puedes ver peliculas violentas")
}

/////////// switch 

switch (edad) {
    case "18":
        console.log("Puedes ver peliculas violentas");
        break;
    default:
        console.log("No puedes ver peliculas violentas")
        break;
}