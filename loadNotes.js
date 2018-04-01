console.log('on page load')
var overlay = document.createElement("div");
overlay.classList.add("maki-invis-overlay");
overlay.id = "maki-invis-overlay";
overlay.style.height = getDocHeight() + 'px';
document.body.appendChild(overlay);


for (var key in localStorage){
    if (key.startsWith("makinote")) {
        var note = JSON.parse(localStorage.getItem(key));
        addNote(note);
    }
 }
