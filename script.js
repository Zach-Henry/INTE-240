const lyrics = [
    { time: 0, text: "Introduction - David Byrne" },
    { time: 30, text: "I can't seem to face up to the facts" },
    { time: 35, text: "I'm tense and nervous and I can't relax" },
    { time: 40, text: "I can't sleep because my bed's on fire" },
    { time: 45, text: "Don't touch me I'm a real live wire" },
    { time: 50, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 55, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 60, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 65, text: "Put in the lyrics and adjust timing" },
    // Add more lyrics here with timestamps...
];

// Lyrics for the song "Psycho Killer" by Talking Heads
// Lyrics are for educational purposes only
/*
I can't seem to face up to the facts
    I'm tense and nervous and I can't relax
    I can't sleep 'cause my bed's on fire
    Don't touch me, I'm a real live wire
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh-oh-oh
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh, oh, oh, oh
    Ay-ya-ya-ya-ya-ya, ooh
    You start a conversation, you can't even finish it
    You're talking a lot, but you're not saying anything
    When I have nothing to say, my lips are sealed
    Say something once, why say it again?
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh-oh-oh
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh, oh, oh, oh
    Ay-ya-ya-ya-ya-ya
Ce que j'ai fait, ce soir-là
Ce qu'elle a dit, ce soir-là
Réalisant mon espoir
Je me lance vers la gloire, okay
Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah
We are vain and we are blind
I hate people when they're not polite
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh-oh-oh
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh, oh, oh, oh
Ai-ya-ya-ya-ya-ya, ooh
*/

let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricElement = document.getElementById("lyric");
audio.addEventListener("play", () => {
setInterval(displayLyrics, 100);
});
function displayLyrics() {
const currentTime = audio.currentTime;
// Find the current lyric based on time
if (
currentLyricIndex < lyrics.length &&
currentTime >= lyrics[currentLyricIndex].time
) {
lyricElement.textContent = lyrics[currentLyricIndex].text;
currentLyricIndex++;
}
}


