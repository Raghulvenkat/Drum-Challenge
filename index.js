
for (var i = 0; i < document.querySelectorAll(".drum").length; i ++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
        soundMatching(this.innerHTML);
    });

}

function soundMatching(sounding){
    if (sounding === "w"){
        var audioPath = "./sounds/tom-1.mp3";
    }
    if (sounding === "a"){
        audioPath = "./sounds/tom-2.mp3";
    }
    if (sounding === "s"){
        audioPath = "./sounds/tom-3.mp3";
    }
    if (sounding === "d"){
        audioPath = "./sounds/tom-4.mp3";
    }
    if (sounding === "j"){
        audioPath = "./sounds/crash.mp3";
    }
    if (sounding === "k"){
        audioPath = "./sounds/kick-bass.mp3";
    }
    if (sounding === "l"){
        audioPath = "./sounds/snare.mp3";
    }

    var audio = new Audio(audioPath);
    audio.play();
}