document.addEventListener("DOMContentLoaded", function() {

    const typingElement = document.getElementById("typing");
    const cursor = document.getElementById("cursor");
    const music = document.getElementById("bg-music");
    const timerElement = document.getElementById("timer");

    /* ================= Typing Effect ================= */

    if (typingElement) {

        const text = "Sana ❤️";
        let index = 0;
        const speed = 200;

        function typeEffect() {
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, speed);
            } else {

                if (cursor) {
                    cursor.style.display = "none";
                }

                // Try playing music after typing
                if (music) {
                    music.play().catch(function(error){
                        console.log("Autoplay blocked:", error);
                    });
                }
            }
        }

        typeEffect();
    }

    /* ================= Timer ================= */

    if (timerElement) {

        function updateTimer(){
            const startDate = new Date("2022-11-23");
            const now = new Date();

            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();

            if(days < 0){
                months--;
                days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            }

            if(months < 0){
                years--;
                months += 12;
            }

            timerElement.innerHTML =
                years + " Years " +
                months + " Months " +
                days + " Days ❤️";
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }

});
