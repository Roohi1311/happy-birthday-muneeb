function startSurprise() {

    document.getElementById("welcome").style.display = "none";

    let music = document.getElementById("music");
    music.play();

    document.body.innerHTML += `
        <div class="container">
            <h1 id="countdown">5</h1>
            <p id="typewriter"></p>
        </div>
    `;

    let count = 5;
    let timer = setInterval(() => {
        count--;

        document.getElementById("countdown").innerHTML = count;

        if (count === 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Happy Birthday Muneeb ❤️";
            typeMessage();
        }

    }, 1000);
}


function typeMessage() {

    let text = "You are my special person. I made this surprise only for you ❤️✨";
    let i = 0;
    let box = document.getElementById("typewriter");

    function typing() {
        if (i < text.length) {
            box.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 100);
        }
    }

    typing();
}
