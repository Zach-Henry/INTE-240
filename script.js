const lyrics = [
    { time: 0, text: "Introduction - David Byrne" },
    { time: 30, text: "I can't seem to face up to the facts" },
    { time: 35, text: "I'm tense and nervous and I can't relax" },
    { time: 40, text: "I can't sleep 'cause my bed's on fire" },
    { time: 45, text: "Don't touch me, I'm a real live wire" },
    { time: 50, text: "Psycho Killer" },
    { time: 52, text: "Qu'est-ce que c'est?" },
    { time: 55, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 60, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 67, text: "Psycho Killer" },
    { time: 69, text: "Qu'est-ce que c'est?" },
    { time: 72, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 77, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 84, text: "Ay-ya-ya-ya-ya-ya, ooh" },
    { time: 90, text: "You start a conversation, you can't even finish it" },
    { time: 95, text: "You're talking a lot, but you're not saying anything" },
    { time: 100, text: "When I have nothing to say, my lips are sealed" },
    { time: 105, text: "Say something once, why say it again?" },
    { time: 110, text: "Psycho Killer" },
    { time: 112, text: "Qu'est-ce que c'est?" },
    { time: 115, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 120, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 127, text: "Ce que j'ai fait, ce soir-là" },
    { time: 130, text: "Ce qu'elle a dit, ce soir-là" },
    { time: 135, text: "Réalisant mon espoir" },
    { time: 140, text: "Je me lance vers la gloire, okay" },
    { time: 145, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah" },
    { time: 150, text: "We are vain and we are blind" },
    { time: 155, text: "I hate people when they're not polite" },
    { time: 160, text: "Psycho Killer" },
    { time: 162, text: "Qu'est-ce que c'est?" },
    { time: 165, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 170, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 177, text: "Ai-ya-ya-ya-ya-ya, ooh" }
];

let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricElement = document.getElementById("lyric");
audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100);
});

function displayLyrics() {
    const currentTime = audio.currentTime;
    if (
        currentLyricIndex < lyrics.length &&
        currentTime >= lyrics[currentLyricIndex].time
    ) {
        lyricElement.textContent = lyrics[currentLyricIndex].text;
        currentLyricIndex++;
    }
}