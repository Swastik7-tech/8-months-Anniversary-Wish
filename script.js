/* ==========================================
   VARIABLES
========================================== */

const intro = document.getElementById("intro");
const titlePage = document.getElementById("titlePage");
const loginPage = document.getElementById("loginPage");
const granted = document.getElementById("granted");
const chemistry = document.getElementById("chemistry");
const gallery = document.getElementById("gallery");
const timerSection = document.getElementById("timerSection");
const letters = document.getElementById("letters");
const sorrySection = document.getElementById("sorrySection");
const fireworksSection = document.getElementById("fireworksSection");
const future = document.getElementById("future");
const ending = document.getElementById("ending");

const musicPopup = document.getElementById("musicPopup");
const playMusic = document.getElementById("playMusic");
const bgMusic = document.getElementById("bgMusic");

const typing = document.getElementById("typing");

const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const wrongPass = document.getElementById("wrongPass");

const continueStory = document.getElementById("continueStory");
const restartJourney = document.getElementById("restartJourney");


/* ==========================================
   HIDE ALL PAGES EXCEPT INTRO
========================================== */

titlePage.style.display = "none";
loginPage.style.display = "none";
granted.style.display = "none";
chemistry.style.display = "none";
gallery.style.display = "none";
timerSection.style.display = "none";
letters.style.display = "none";
sorrySection.style.display = "none";
fireworksSection.style.display = "none";
future.style.display = "none";
ending.style.display = "none";


/* ==========================================
   MUSIC POPUP
========================================== */

playMusic.onclick = () => {

    bgMusic.play();

    musicPopup.style.display = "none";

};


/* ==========================================
   INTRO CLICK
========================================== */

intro.addEventListener("click", () => {

    intro.style.display = "none";

    titlePage.style.display = "flex";

    startTyping();

});


/* ==========================================
   TYPEWRITER
========================================== */

const message =
"Happy 8th Month Anniversary, My Piya ❤️";

let index = 0;

function startTyping(){

    typing.innerHTML = "";

    index = 0;

    const type = setInterval(() => {

        typing.innerHTML += message.charAt(index);

        index++;

        if(index >= message.length){

            clearInterval(type);

            setTimeout(()=>{

                titlePage.style.display="none";

                loginPage.style.display="flex";

            },1500);

        }

    },90);

}


/* ==========================================
   PASSWORD
========================================== */

loginBtn.onclick = () => {

    if(password.value.trim() === "Unquadtrium"){

        loginPage.style.display="none";

        granted.style.display="flex";

        setTimeout(()=>{

            granted.style.display="none";

            chemistry.style.display="flex";

        },2500);

    }

    else{

        wrongPass.innerHTML =
        "❌ Wrong Love Code";

    }

};


/* ==========================================
   CONTINUE STORY
========================================== */

continueStory.onclick = () => {

    chemistry.style.display="none";

    gallery.style.display="flex";

};

/* ==========================================
   LOVE TIMER
   Start Date: 18 June 2025, 11:04 PM
========================================== */

const startDate = new Date("October 18, 2025 23:04:00");

function updateLoveTimer(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateLoveTimer,1000);

updateLoveTimer();


/* ==========================================
   LETTERS
========================================== */

function openLetter(number){

    if(number===1){

        alert(
`My Dearest Piya ❤️

Thank you for coming into my life.

Every day with you feels like
the happiest chapter of my story.

I love you forever.`
        );

    }

    else if(number===2){

        alert(
`You are my peace,
my happiness,
my favourite person,
and my safest place.

No matter what happens,
I'll always choose you. ❤️`
        );

    }

    else{

        alert(
`One day,
after we achieve our dreams,

I'll hold your hand forever.

Until then,
I'll keep loving you
more every single day. 💍`
        );

    }

}


/* ==========================================
   GALLERY -> TIMER
========================================== */

gallery.addEventListener("click",()=>{

    gallery.style.display="none";

    timerSection.style.display="flex";

});


/* ==========================================
   TIMER -> LETTERS
========================================== */

timerSection.addEventListener("click",()=>{

    timerSection.style.display="none";

    letters.style.display="flex";

});


/* ==========================================
   LETTERS -> APOLOGY
========================================== */

letters.addEventListener("dblclick",()=>{

    letters.style.display="none";

    sorrySection.style.display="flex";

});


/* ==========================================
   APOLOGY -> FIREWORKS
========================================== */

sorrySection.addEventListener("click",()=>{

    sorrySection.style.display="none";

    fireworksSection.style.display="flex";

    startFireworks();

});


/* ==========================================
   FIREWORKS -> FUTURE
========================================== */

fireworksSection.addEventListener("click",()=>{

    fireworksSection.style.display="none";

    future.style.display="flex";

});


/* ==========================================
   FUTURE -> ENDING
========================================== */

future.addEventListener("click",()=>{

    future.style.display="none";

    ending.style.display="flex";

});

/* ==========================================
   FIREWORKS ANIMATION
========================================== */

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const fireworks = [];

function createFirework(){

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.6;

    const particles = [];

    for(let i = 0; i < 60; i++){

        particles.push({

            x: x,
            y: y,

            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,

            life: 100,

            color:
            `hsl(${Math.random()*360},100%,60%)`

        });

    }

    fireworks.push(particles);

}

function drawFireworks(){

    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    fireworks.forEach((group,index)=>{

        group.forEach((p)=>{

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                2,
                0,
                Math.PI*2
            );

            ctx.fillStyle = p.color;
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            p.dy += 0.03;

            p.life--;

        });

        fireworks[index] =
        group.filter(p=>p.life>0);

    });

    requestAnimationFrame(drawFireworks);

}

function startFireworks(){

    drawFireworks();

    setInterval(createFirework,700);

}

/* ==========================================
   RESTART JOURNEY
========================================== */

restartJourney.onclick = () => {

    ending.style.display = "none";

    intro.style.display = "flex";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize =
        (20 + Math.random()*20) + "px";

    heart.style.color = "#ff4da6";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = -30;

    const move = setInterval(()=>{

        pos += 2;

        heart.style.bottom = pos + "px";

        heart.style.transform =
        `translateX(${Math.sin(pos/30)*20}px)`;

        if(pos > window.innerHeight + 50){

            clearInterval(move);
            heart.remove();

        }

    },20);

}

setInterval(createHeart,1500);

/* ==========================================
   INITIALIZATION
========================================== */

console.log("❤️ Unquadtrium143 Loaded Successfully ❤️");