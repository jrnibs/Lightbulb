document.addEventListener('DOMContentLoaded', () => {
    
    let btn = document.querySelector('.btn'); // Adjust this if your button has a different class or ID
    let image = document.getElementById('bulb_img');
    let audio = document.querySelector('#audio');
    let lighthum = document.querySelector('#light_hum');
    let body = document.body;

    btn.addEventListener('click', () => {
        body.classList.toggle("on");        
        lightChange();

       // Check if audio is currently playing
        if (audio.paused) {
            audio.currentTime = 0; // Reset to the beginning
            audio.play(); // Play the audio
        }
    });

    function lightChange() {
        if (image.src.includes("bulb_off")) {
            image.src = "src/bulb_start.png";
            lighthum.play();
            setTimeout(() => {
                image.src = "src/bulb_on.png";
                
            }, 1200);
        } else {
            image.src = "src/bulb_off.png";
        }
    }
});