var keysArray = Array.from(document.querySelectorAll('.key'));
// var audiosArray = Array.from(document.querySelectorAll('audio'));
var keyNumber;

var keyboardPressed = [
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "l"
]

// play matching sound
function getSound(keyNumber) {
    audio = document.querySelector("audio[data-key='" + keyNumber +"']")
    audio.play();
}

// get key number from click
(function getKey(){
    for (let key of keysArray) {
        key.addEventListener('click', function () {
            keyNumber = key.dataset.key;
            getSound(keyNumber);
        });
    }
})();

// get key number from key press
var keyboardPressedArray = Array.from(document.querySelectorAll('kbd'));
function getKeyPressed(){
    for (let keyPressed of keysPressedArray) {
        console.log(keyPressed);
    }
}