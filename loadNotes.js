console.log('on page load')
var overlay = document.createElement("div");
overlay.classList.add("maki-invis-overlay");
overlay.id = "maki-invis-overlay";
overlay.style.height = getDocHeight() + 'px';
document.body.appendChild(overlay);


for (var key in localStorage){
    if (key.startsWith("makinote")) {
        var note = JSON.parse(localStorage.getItem(key));
        var note_div = document.createElement("div");
        note_div.classList.add("maki-note");
        note_div.style.top = "" + note.coords.y + "px";
        note_div.style.left = "" + note.coords.x + "px";
        note_div.textContent = note.text;
        overlay.appendChild(note_div);
    }
 }
