function startSurprise() {

    document.getElementById("welcome").style.display = "none";

    let music = document.getElementById("music");
        music.play().catch(error => {
        console.log(error);
    });
    music.volume=1;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="container">
        <h1 id="countdown">5</h1>
        <p id="typewriter"></p>
    </div>
`);

    let count = 5;
    let timer = setInterval(() => {
        count--;

        document.getElementById("countdown").innerHTML = count;

        if (count === 0) {
            clearInterval(timer);
document.getElementById("countdown").innerHTML = "Happy Birthday Muneeb ❤️";

showSlideshow();
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
    setTimeout(showSlideshow, 30000);
}
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.className = "heart";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 400);
function showSlideshow(){

    document.body.insertAdjacentHTML("beforeend",`
        <div class="slideshow">
            <img id="slide" src="m.jfif">
            <h2>Forever Yours,<br>Roohi ❤️</h2>
        </div>
    `);

    let images=[
        "R.jfif",
        "Muneeb.jfif"
    ];

    let i=0;

    setInterval(()=>{
        i=(i+1)%images.length;
        document.getElementById("slide").src=images[i];
    },3000);

}
