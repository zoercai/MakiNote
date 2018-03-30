console.log('on page load')
for (var key in localStorage){
    if (key.startsWith("makinote")) {
        var json_string = localStorage.getItem(key);
        console.log(JSON.parse(json_string));
    }
 }