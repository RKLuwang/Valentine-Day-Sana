document.addEventListener("DOMContentLoaded", function () {

    const typingElement = document.getElementById("typing");
    const cursor = document.getElementById("cursor");
    const music = document.getElementById("bg-music");
    const tapHint = document.getElementById("tap-hint");

    let musicStarted = false;
    let typingDone = false;

    /* ===== Typing Effect ===== */

    if (typingElement) {

        const text = "Sana ❤️";
        let index = 0;
        const speed = 200;

        function typeEffect() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, speed);
            } else {
                if (cursor) cursor.style.display = "none";
                typingDone = true;

                if (tapHint) {
                    tapHint.style.display = "block";
                    tapHint.style.opacity = "1";
                }
            }
        }

        typeEffect();
    }

    /* ===== ALWAYS Allow Tap To Start Music ===== */

    function playMusic() {
        if (!musicStarted && music) {
            musicStarted = true;

            music.play().then(() => {
                if (tapHint) tapHint.style.display = "none";
            }).catch(err => {
                console.log("Play blocked:", err);
            });
        }
    }

    // Attach directly to body for strongest mobile compatibility
    document.body.addEventListener("click", playMusic);
    document.body.addEventListener("touchstart", playMusic);

});
