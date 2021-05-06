let btnPrueba = document.getElementById("btnPrueba");

const spamLink = () => {
    for (let i = 0; i<5; i++){
        window.open("https://www.google.com/");
    }
}

btnPrueba.addEventListener("click", () => {
    spamLink();
});