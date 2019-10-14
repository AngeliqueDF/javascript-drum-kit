// initialize value that will hold key the number of the clicked key
var keyNumber;

function playSound(keyNumber) {
    // selecting matching audio element using data-key attribute value
    audio = document.querySelector("audio[data-key='" + keyNumber + "']");
    if (!audio.paused || audio.currentTime > 0 || !audio.ended) {
        //calling play method on matching audio element
        audio.currentTime = 0;
        audio.play();
    } else {
        //calling play method on matching audio element
        audio.play();
    }
}

// add keydown event listener on all key elements
document.addEventListener("keydown", function (event) {
    //getting code of key pressed
    keyNumber = event.which;
    playSound(keyNumber);
});

keysArray = Array.from(document.querySelectorAll(".key"));
// add click event listener on all key elements
(function getKey() {
    for (let key of keysArray) {
        key.addEventListener('click', function () {
            // get data-key attribute value
            keyNumber = key.dataset.key;
            playSound(keyNumber);
        });
    };
})();