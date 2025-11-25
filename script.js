// Background music volume (optional)
const bg = document.getElementById('bg-music');
bg.volume = 0.15;

// Pause other recordings when one plays
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
