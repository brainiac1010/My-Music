
let progress = document.getElementById("progress");
let song = document.querySelector("audio");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

setInterval(() => {
    progress.value = song.currentTime;
}, 500);

progress.oninput = function () {
    song.currentTime = progress.value;
}

function skipForward() {
    song.currentTime += 5; 
}

function skipBackward() {
    song.currentTime -= 5; 
}
