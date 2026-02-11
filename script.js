/* ================= Typing Effect + Music ================= */

const typingElement = document.getElementById("typing");
const cursor = document.getElementById("cursor");
const music = document.getElementById("bg-music");

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

            // Hide cursor
            if(cursor){
                cursor.style.display = "none";
            }

            // Start music after typing completes
            if(music){
                music.volume = 0;
                music.play().catch(() => {});

                let fade = setInterval(function(){
                    if(music.volume < 0.9){
                        music.volume += 0.05;
                    } else {
                        clearInterval(fade);
                    }
                }, 200);
            }
        }
    }

    typeEffect();
}



/* ================= Timer (Safe Version) ================= */

const timerElement = document.getElementById("timer");

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
/* ================= Background Music ================= */

const music = document.getElementById("bg-music");

if(music){

    function startMusic(){
        music.volume = 0;
        music.play();

        // Smooth fade-in
        let fade = setInterval(function(){
            if(music.volume < 0.9){
                music.volume += 0.05;
            } else {
                clearInterval(fade);
            }
        }, 200);

        // Remove listener after first tap
        document.removeEventListener("click", startMusic);
    }

    document.addEventListener("click", startMusic);
}


