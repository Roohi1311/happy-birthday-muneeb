function startSurprise() {

    document.getElementById("welcome").style.display = "none";

    let music = document.getElementById("music");
    music.play().then(() => {
    console.log("Music Started");
}).catch(error => {
    console.error("Music Error:", error);
});
    music.volume=0.5;

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

    let text = ` I love you so much 😘❤️

You are a very special person in my life, and I feel lucky to have you. My biggest wish for you is that you always stay happy, healthy, and successful.

May Allah fill your life with endless happiness, peace, and countless blessings Aameen Sum Aameen . Always keep smiling because your happiness means a lot to me. ❤️✨`;
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
