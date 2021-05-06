//operaciones


const sumaDosNumeros = () => {
    let num1 = prompt("Ingresa el numero 1");
    let num2 = prompt("Ingresa el numero 2");
    console.log(num1,num2);
    let resultado = parseInt(num1) +parseInt(num2);
    console.log(resultado);
}

const restaDosNumeros = () => {
    let num1 = prompt("Ingresa el numero 1");
    let num2 = prompt("Ingresa el numero 2");
    console.log(num1,num2);
    let resultado = parseInt(num1) - parseInt(num2);
    console.log(resultado);
}

const multiDosNumeros = () => {
    let num1 = prompt("Ingresa el numero 1");
    let num2 = prompt("Ingresa el numero 2");
    console.log(num1,num2);
    let resultado = parseInt(num1) * parseInt(num2);
    console.log(resultado);
}

const dividirDosNumeros = () => {
    let num1 = prompt("Ingresa el numero 1");
    let num2 = prompt("Ingresa el numero 2");
    console.log(num1,num2);
    num2 == 0 ? console.log("No se puede dividir por 0") :  console.log(num1/num2);
    
}