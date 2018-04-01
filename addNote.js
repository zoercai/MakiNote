console.log("hello dean!");

if (!overlayExists()) {
    addOverlay();
} else {
    deleteOverlay();
}

function getOverlay() {
    return document.getElementById("maki-overlay");
}

function overlayExists() {
    return getOverlay() !== null;
}

function addOverlay() {
    var overlay = document.createElement("div");
    overlay.classList.add("maki-overlay");
    overlay.id = "maki-overlay";
    overlay.style = "position: absolute; z-index: 99999999999; top: 0; left: 0; width: 100%; height: " + getDocHeight() + "px; background-color: rgba(242, 180, 199, 0.83); cursor: crosshair;";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", printMousePos);
}

function deleteOverlay() {
    document.body.removeChild(document.getElementById("maki-overlay"));
}

function printMousePos(event) {

    overlay = getOverlay();
    overlay.removeEventListener("click", printMousePos);

    var x = window.scrollX + event.clientX;
    var y = window.scrollY + event.clientY;

    var newNoteDiv = document.createElement("div");
    newNoteDiv.classList.add("new-maki-note");
    newNoteDiv.style.top = "" + y + "px";
    newNoteDiv.style.left = "" + x + "px";

    var input = document.createElement("textarea");
    input.classList.add("maki-note-input");
    input.placeholder = "Zozo is the catgirl princess";
    var button = document.createElement("button");
    button.classList.add("maki-note-button");
    button.textContent = "submit";
    newNoteDiv.appendChild(input);
    newNoteDiv.appendChild(button);
    overlay.appendChild(newNoteDiv);
    button.addEventListener("click", function(ev) {
        var now = Date.now();
        var note_obj = {
            'text': input.value,
            'id': 'makinote-'+now,
            'url': window.location.href,
            'coords': {'x': x, 'y': y},
            'dims': {'x': newNoteDiv.offsetWidth, 'y': newNoteDiv.offsetHeight},
            'created': now,
            'modified': now,
        };

        localStorage.setItem(note_obj.id, JSON.stringify(note_obj));

        overlay.removeChild(newNoteDiv);
        addNote(note_obj);

        overlay.addEventListener("click", printMousePos);
        ev.stopPropagation();
    });
}
