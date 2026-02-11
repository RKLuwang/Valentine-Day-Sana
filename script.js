document.addEventListener("DOMContentLoaded", function () {

    const typingElement = document.getElementById("typing");
    const cursor = document.getElementById("cursor");
    const music = document.getElementById("bg-music");

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
                if (cursor) {
                    cursor.style.display = "none";
                }

                // Try playing music after typing
                if (music) {
                    music.play().catch(function (error) {
                        console.log("Autoplay blocked:", error);
                    });
                }
            }
        }

        typeEffect();
    }

});
