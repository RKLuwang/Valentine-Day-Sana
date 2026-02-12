document.addEventListener("DOMContentLoaded", function () {

    const typingElement = document.getElementById("typing");
    const cursor = document.getElementById("cursor");
    const tapHint = document.getElementById("tap-hint");
    const music = document.getElementById("bg-music");

    /* ===== Typing Effect ===== */
    if (typingElement) {
        const text = "Sana ❤️";
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 200);
            } else {
                if (cursor) cursor.style.display = "none";
                if (tapHint) tapHint.style.display = "block";
            }
        }

        typeEffect();
    }

    /* ===== Android Safe Music Start ===== */
    function startMusic() {
        if (music && music.paused) {

            music.currentTime = 0;
            music.volume = 1;
            music.play();

            if (tapHint) tapHint.style.display = "none";
        }
    }

    // Must attach directly to body for Android
    document.body.addEventListener("click", startMusic);
    document.body.addEventListener("touchstart", startMusic);

});
