// Minicalculadora


const miniCalculadora = () => {
    let op = prompt("Escriba la opcion correspondiente a la operacion: \n A. Sumar \n B. Restar \n C. Multiplicar \n D. Dividir");
    op = op.toLowerCase();
    if(op == null){
        alert("Debe ingresar algun dato");
    } else{
        if(op != "a" && op != "b" && op != "c" && op != "d"){
            alert("Debe ser una opcion valida entre A-D");
        } else {
            let num1 = parseFloat(prompt("ingrese el numero 1"));
            let num2 = parseFloat(prompt("ingrese el numero 2"));
            let resultado = 0;
            if(op == "a") resultado = num1 + num2;
            if(op == "b") resultado = num1 - num2;
            if(op == "c") resultado = num1 * num2;
        
            if(op == "d"){
                if(num2 === 0){
                    alert("No se puede dividir por cero");
                } else{
                    resultado = num1 / num2;
                }
            } 
    
    
        }

    }


    

};
