const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const surprise = document.getElementById("surprise");

startBtn.addEventListener("click", () => {
    intro.style.display = "none";
    surprise.style.display = "block";

    startCountdown();
});

function startCountdown() {
    let count = 5;
    const countdown = document.getElementById("countdown");

    countdown.innerHTML = count;

    const timer = setInterval(() => {
        count--;

        if (count > 0) {
            countdown.innerHTML = count;
        } else {
            clearInterval(timer);
            countdown.innerHTML = "Surprise ❤️";
            showMessage();
        }
    }, 1000);
}

function showMessage() {
    const text = "I have something special for you ✨";
    const message = document.getElementById("typewriter");

    let i = 0;

    function typing() {
        if (i < text.length) {
            message.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 100);
        }
    }

    typing();
}
