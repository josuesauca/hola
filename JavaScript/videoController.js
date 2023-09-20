//Video

document.getElementById("btnController").addEventListener("click", () => {
    var nombreVideo = document.getElementById("my_video");
    if (nombreVideo.paused) {
        nombreVideo.play();
        document.getElementById("btnController").innerHTML = "Pause";
    } else {
        nombreVideo.pause();
        document.getElementById("btnController").innerHTML = "Play";
    }
});

document.getElementById("btnReset").addEventListener("click",()=>{
    var vid = document.getElementById("my_video");
    vid.currentTime = 0;
});

document.getElementById("btnScreen").addEventListener("click",()=>{
    var vid = document.getElementById("my_video");
    if(vid.requestFullScreen){
        vid.requestFullscreen();
    }else{
        if(vid.webkitRequestFullScreen){
            vid.webkitRequestFullScreen();
        }else{
            if(vid.mozRequestFullScreen){
                vid.mozRequestFullScreen();
            }
        }
    }
});

window.addEventListener("load",()=>{
    initializePlayer();
});

function initializePlayer() {
    var vid = document.getElementById("my_video");
    var seekSlider = document.getElementById("seekslider");

    seekSlider.addEventListener("change",vidSeek);
    vid.addEventListener("timeupdate",seekTimeUpdate);
}

function seekTimeUpdate() {
    var nombreVideo = document.getElementById("my_video");
    var seekSlider = document.getElementById("seekslider");
    var nt = nombreVideo.currentTime * (100/nombreVideo.duration);
    seekSlider.value = nt;
}

function vidSeek() {
    var nombreVideo = document.getElementById("my_video");
    var seekSlider = document.getElementById("seekslider");
    var seekto = nombreVideo.duration*(seekSlider.value/100);
    nombreVideo.currentTime = seekto;
}
