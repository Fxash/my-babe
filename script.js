// Background music volume
const bg = document.getElementById('bg-music');
bg.volume = 0.15;

// Pause other recordings when one begins playing
const voiceAudios = document.querySelectorAll(".voice");

voiceAudios.forEach(audio => {
    audio.addEventListener("play", () => {
        voiceAudios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });
});

