window.addEventListener('keydown', playsound)


function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();


    // adding and removing animation
    const keyPressed = document.querySelector(`div[data-key="${e.keyCode}"]`);
        keyPressed.classList.add('playing');

    keyPressed.addEventListener("transitionend", function(e) {
        keyPressed.classList.remove("playing");
    })
}

// const Keys = document.querySelector()
// window.addEventListener('click', clicksound)
// function clicksound(e) {
//     console.log(this)
// }