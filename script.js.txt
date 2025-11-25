// Poem text
const poemText = 
`Every sunrise reminds me  
how lucky I am to have you.  

Your smile lights my world,  
your laugh warms my heart,  
and your love makes everything  
feel soft and beautiful.  

Good morning, my love.  
I hope today brings you  
as much joy as you bring to me. ❤️ yours faithfull Ash`;

let i = 0;

// Typing effect
function typePoem() {
    if (i < poemText.length) {
        document.getElementById("poem").innerHTML += poemText.charAt(i);
        i++;
        setTimeout(typePoem, 50); // typing speed
    }
}
typePoem();

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 600);
