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

    let text = "Happy Birthday Muneeb ❤️✨

On your special day, I just want to make you feel how precious and special you are.
    
May Allah bless you with endless happiness, good health, success and a beautiful life ahead. May every dream you carry in your heart come true, and may Allah open doors of opportunities, peace and blessings for you.
I pray that Allah always keeps a smile on your face, removes every difficulty from your path, protects you from every sadness, and fills your life with countless moments of joy and love.
You are a very special person in my life, and I am grateful for all the beautiful memories and moments we share. Thank you for being a part of my journey and for bringing happiness into my life.
On your birthday, my biggest wish for you is that you always stay happy, confident and successful. May you achieve everything you work hard for and may Allah reward your efforts with the best.

I hope this new year of your life brings you more happiness than the last one, more reasons to smile, more achievements, and countless blessings.
Always remember that you are valued, appreciated and cared for. ❤️

Once again, Happy Birthday Muneeb ❤️🎂

May Allah bless you today, tomorrow, and always. Ameen 🤲✨";
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
