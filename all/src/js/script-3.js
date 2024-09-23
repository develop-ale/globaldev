function scorrimentoTitolo() {
    let titolo = "Questo è il titolo della mia pagina che scorre! ";
    let index = 0;

    // Funzione che aggiorna il titolo progressivamente
    setInterval(function() {
        document.title = titolo.substring(index) + titolo.substring(0, index);
        index = (index + 1) % titolo.length;
    }, 200); // Cambia ogni 200 millisecondi (modificabile)
}

// Avvio dello scorrimento al caricamento della pagina
window.onload = scorrimentoTitolo;