document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bg-music");

    document.addEventListener("click", function () {
        if (music) {
            music.play().then(() => {
                console.log("Music started");
            }).catch((e) => {
                console.log("Blocked:", e);
            });
        }
    });

});
