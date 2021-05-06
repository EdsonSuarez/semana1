let btnPrueba = document.getElementById("btnPrueba");
let nombre = document.getElementById("nombre");
const registroNombre = () => {
    let nombre = prompt("ingresa tu nombre");
    this.nombre.innerHTML = "Nombre: " + nombre;
}

// Onclick
btnPrueba.onclick = () => {
    registroNombre();
}