

        // Mostra il popup al caricamento della pagina
        window.onload = function () {
            document.getElementById("cookiePopup").style.display = "flex";
            document.getElementById("cookieOverlay").style.display = "block";
        };

        // Abilita l'interazione con la pagina
        function enablePage() {
            document.querySelector('.all').style.pointerEvents = 'all';
            document.querySelector('.all').style.opacity = '1';
            document.getElementById("cookiePopup").style.display = "none";
            document.getElementById("cookieOverlay").style.display = "none";
        }

        // Azione al click del pulsante "Accetta tutti"
        document.getElementById("acceptCookies").onclick = function () {
            enablePage();
        };

        // Azione al click del pulsante "Rifiuta tutti"
        document.getElementById("rejectCookies").onclick = function () {
            enablePage();
        };