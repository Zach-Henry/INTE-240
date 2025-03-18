const lyrics = [
    { time: 0.0, text: "(Are you ready, hey, are you ready for this?)", singer: "freddie" },
    { time: 2.5, text: "(Are you hanging on the edge of your seat?)", singer: "freddie" },
    { time: 4.0, text: "I need a break beat, uh", singer: "others" },
    { time: 5.0, text: "(Are you ready, hey, are you ready for this?)", singer: "freddie" },
    { time: 7.0, text: "(Are you hanging on the edge of your seat?)", singer: "freddie" },
    { time: 8.5, text: "(Are you ready, hey, are you ready for this?)", singer: "freddie" },
    { time: 11.0, text: "(Are you hanging on the edge of your seat?)", singer: "freddie" },
    { time: 13.0, text: "(Outta the doorway the bullets rip)", singer: "freddie" },
    { time: 15.5, text: "(Repeating to the sound of the beat, hey)", singer: "freddie" },
    { time: 17.5, text: "Yo, a for the kids in the club that's ready to get bugged", singer: "others" },
    { time: 19.0, text: "(Another one bites the dust)", singer: "freddie" },
    { time: 21.5, text: "And for the thugs with the burners that wanna blast off", singer: "others" },
    { time: 23.0, text: "(Another one bites the dust)", singer: "freddie" },
    { time: 27.5, text: "And for the kids on the blocks, shootin' at the crooked cops—blaow!", singer: "others" },
    { time: 28.0, text: "(Another one bites the dust)", singer: "freddie" },
    { time: 30.5, text: "(And another one gone)", singer: "freddie" },
    { time: 45.0, text: "Wyclef", singer: "others" },
    { time: 32.5, text: "(And another one gone)", singer: "freddie" },
    { time: 33.0, text: "Dirty Cash", singer: "others" },
    { time: 34.5, text: "(Another one bites the dust)", singer: "freddie" },
    { time: 36.0, text: "Young Free, Freddie where you at?", singer: "others" },
    { time: 37.5, text: "(Steve walks wearily down the street)", singer: "freddie" },
    { time: 39.0, text: "(With the brim pulled way down low)", singer: "freddie" },
    { time: 41.5, text: "Some cat up in Brooklyn just got robbed with a Kangol", singer: "others" },
    { time: 65.0, text: "(Are you ready, hey, are you ready for this?)", singer: "freddie" },
    { time: 67.5, text: "(Are you hanging on the edge of your seat?)", singer: "freddie" },
    { time: 70.0, text: "(Out of the doorway, the bullets rip)", singer: "freddie" },
    { time: 72.5, text: "(Repeating to the sound of the beat, hey)", singer: "freddie" },
    { time: 75.0, text: "My man got shot, and the block got hot", singer: "others" },
    { time: 77.5, text: "(Another one bites the dust)", singer: "freddie" },
    { time: 80.0, text: "Yo, hey I hear more shots, this is like Fort Knox, kid", singer: "others" },
    { time: 82.5, text: "(Another one bites the dust)", singer: "freddie" }
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
   const freddieDiv = document.getElementById('lyric-freddie');
   const othersDiv = document.getElementById('lyric-others');
   


   function displayLyrics() {
       const currentTime = audio.currentTime;
       
       lyrics.forEach(lyric => {
           if (currentTime >= lyric.time && currentTime < lyric.time + 0.5) {
               if (lyric.singer === "freddie") {
                   freddieDiv.textContent = lyric.text;
               } else if (lyric.singer === "others") {
                   othersDiv.textContent = lyric.text;
               }
           }
       });
   }
   
   audio.addEventListener('timeupdate', displayLyrics);