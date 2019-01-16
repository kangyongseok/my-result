$(document).ready(function() {
    var video = document.getElementById("myVideo");

    $("#myBtn").on("click", function() {
        if(this.innerHTML === "Pause") {
            video.pause();
            this.innerHTML = "Play";
        } else {
            video.play();
            this.innerHTML = "Pause";
        }
    })
})