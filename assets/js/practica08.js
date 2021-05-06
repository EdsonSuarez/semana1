// DOM Document Objet Model

let btnPrueba = document.getElementById("btnPrueba");
let tituloPagina = document.getElementById("tituloPagina");

const mensajeAlerta = () => {
    console.log("pruebaqqqq");
};

//Onclicks

btnPrueba.onclick = () => {
    mensajeAlerta();
}

tituloPagina.onclick = () => {
    mensajeAlerta();
}