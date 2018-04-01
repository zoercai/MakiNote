var overlay = document.createElement("div");
overlay.classList.add("maki-invis-overlay");
overlay.id = "maki-invis-overlay";
overlay.style.height = getDocHeight() + 'px';
document.body.appendChild(overlay);

const font = document.createElement("link");
font.href = "https://fonts.googleapis.com/css?family=Schoolbell";
font.rel = "stylesheet";

document.head.appendChild(font);


for (var key in localStorage){
    if (key.startsWith("makinote")) {
        var note = JSON.parse(localStorage.getItem(key));
        if (note.url == window.location.href) {
            addNote(note);
        }
    }
 }
