function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function addNote(note) {
    var note_div = document.createElement("div");
    note_div.classList.add("maki-note");
    note_div.style.top = "" + note.coords.y + "px";
    note_div.style.left = "" + note.coords.x + "px";
    note_div.textContent = note.text;
    document.getElementById("maki-invis-overlay").appendChild(note_div);
}
