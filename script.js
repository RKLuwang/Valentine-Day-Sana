document.addEventListener("DOMContentLoaded", function () {

    const typingElement = document.getElementById("typing");
    const cursor = document.getElementById("cursor");
    const music = document.getElementById("bg-music");

    let typingFinished = false;
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
                typingFinished = true;
            }
        }

        typeEffect();
    }

    /* ===== Start Music On First Interaction ===== */

    function startMusic() {
        if (typingFinished && !musicStarted && music) {

            musicStarted = true;

            music.volume = 0;
            music.play().then(() => {

                let fade = setInterval(function () {
                    if (music.volume < 0.9) {
                        music.volume += 0.05;
                    } else {
                        clearInterval(fade);
                    }
                }, 200);

            }).catch((error) => {
                console.log("Autoplay blocked:", error);
            });
        }
    }

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);

});
