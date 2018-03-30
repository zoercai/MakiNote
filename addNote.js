console.log("hello dean!");
var overlay = document.createElement("div");
overlay.id = "maki-overlay";
overlay.style = "position: absolute; z-index: 99999999999; top: 0; left: 0; width: 100%; height: " + getDocHeight() + "px; background-color: rgba(242, 180, 199, 0.83); cursor: crosshair;";
document.body.appendChild(overlay);

function printMousePos(event) {

    overlay.removeEventListener("click", printMousePos);

    var x = window.scrollX + event.clientX;
    var y = window.scrollY + event.clientY;

    var note = document.createElement("div");
    note.id = "maki-note";
    note.style = "background: #F4E6D6; position: absolute; top: " + y + "px; left: " + x + "px; width: 200px; height: 100px;";

    var input = document.createElement("textarea");
    input.style = "margin: 4px; width: 100%; height: 100%;";
    input.placeholder = "Zozo is the catgirl princess";
    var button = document.createElement("button");
    button.textContent = "submit";
    note.appendChild(input);
    note.appendChild(button);
    overlay.appendChild(note);
    button.addEventListener("click", function(ev) {
        var now = Date.now();
        var note_obj = {
            'text': input.value,
            'id': 'makinote-'+now,
            'url': window.location.href,
            'coords': {'x': x, 'y': y},
            'created': now,
            'modified': now,
        };

        localStorage.setItem(note_obj.id, JSON.stringify(note_obj));

        overlay.addEventListener("click", printMousePos);
        ev.stopPropagation();
    });

}
overlay.addEventListener("click", printMousePos);

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}