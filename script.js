document.addEventListener("DOMContentLoaded", function () {

    const typingElement = document.getElementById("typing");
    const cursor = document.getElementById("cursor");
    const music = document.getElementById("bg-music");
    const tapHint = document.getElementById("tap-hint");

    let musicStarted = false;

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

                // Show tap hint after typing finishes
                if (tapHint) {
                    tapHint.style.display = "block";
                    tapHint.style.opacity = "1";
                }
            }
        }

        typeEffect();
    }

    /* ===== Mobile Safe Tap Handler ===== */

    function handleTap() {

        if (!musicStarted && music) {

            musicStarted = true;

            // Hide tap hint
            if (tapHint) tapHint.style.display = "none";

            // Play immediately inside tap
            music.play();

            document.removeEventListener("click", handleTap);
            document.removeEventListener("touchstart", handleTap);
        }
    }

    document.addEventListener("click", handleTap);
    document.addEventListener("touchstart", handleTap);

});
