function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function addNote(note) {
    console.log(note)
    var noteDiv = document.createElement("div");
    noteDiv.classList.add("maki-note");
    noteDiv.style.top = note.coords.y + "px";
    noteDiv.style.left = note.coords.x + "px";
    noteDiv.style.height = note.dims.y + "px";
    noteDiv.style.width = note.dims.x + "px";

    var noteText = document.createElement("p");
    noteText.classList.add("maki-note-text");
    noteText.textContent = note.text;
    noteDiv.appendChild(noteText);

    document.getElementById("maki-invis-overlay").appendChild(noteDiv);
}
