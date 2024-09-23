function scorrimentoTitolo() {
    let titolo = "Questo è il titolo della mia pagina che scorre! ";
    let index = 0;
    console.log("Inizio scorrimento titolo");

    setInterval(function() {
        console.log("Aggiornamento titolo", titolo.substring(index) + titolo.substring(0, index)); // Aggiungi log
        document.title = titolo.substring(index) + titolo.substring(0, index);
        index = (index + 1) % titolo.length;
    }, 200);
}

window.onload = scorrimentoTitolo;
