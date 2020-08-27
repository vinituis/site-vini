function accordions(id) {
    var accordion = document.getElementById(id);
    if (accordion.className.indexOf("w3-show") == -1) {
        accordion.className += " w3-show";
    } else {
        accordion.className = accordion.className.replace(" w3-show", "");
    }
};

function mostraProjeto(id) {
    var description = document.getElementById(id);
    if (description.className.indexOf("w3-show") == -1) {
        description.className += " w3-show";
    } else {
        description.className = description.className.replace(" w3-show", "");
    }
}