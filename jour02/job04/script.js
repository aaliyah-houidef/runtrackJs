const keylogger = document.getElementById("keylogger");

addEventListener("keydown", event => {
    if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        keylogger.value += event.key;
    }
});