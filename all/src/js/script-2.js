window.onload = function () {
    if (!getCookie("cookieConsent")) {
        document.getElementById("cookiePopup").style.display = "flex";
        document.getElementById("cookieOverlay").style.display = "block";
    } else {
        enablePage();
    }
};

// Funzione per impostare i cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Funzione per ottenere i cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Abilita l'interazione con la pagina
function enablePage() {
    document.querySelector('.all').style.pointerEvents = 'all';
    document.querySelector('.all').style.opacity = '1';
    document.getElementById("cookiePopup").style.display = "none";
    document.getElementById("cookieOverlay").style.display = "none";
}

// Azione al click del pulsante "Accetta tutti"
document.getElementById("acceptCookies").onclick = function () {
    setCookie("cookieConsent", "accepted", 365);
    enablePage();
};

// Azione al click del pulsante "Rifiuta tutti"
document.getElementById("rejectCookies").onclick = function () {
    setCookie("cookieConsent", "rejected", 365);
    enablePage();
};