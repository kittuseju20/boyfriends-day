const openingScreen = document.getElementById("openingScreen");
const waxSeal = document.getElementById("waxSeal");
const mainWebsite = document.getElementById("mainWebsite");

const playButton = document.getElementById("playButton");
const songStatus = document.getElementById("songStatus");
const song = document.getElementById("song");

/* Wax seal opening */

waxSeal.addEventListener("click", () => {
  openingScreen.classList.add("opened");
  mainWebsite.classList.add("visible");

  // Try to start the song automatically after the seal is opened
  if (song) {
    song.play()
      .then(() => {
        if (songStatus) {
          songStatus.textContent = "Playing for you ♡";
        }
      })
      .catch(() => {
        if (songStatus) {
          songStatus.textContent = "Tap Play to start the song ♡";
        }
      });
  }
});


/* Music button */

playButton.addEventListener("click", () => {
  if (!song) return;

  if (song.paused) {
    song.play()
      .then(() => {
        playButton.textContent = "❚❚ Pause";
        songStatus.textContent = "Playing for you ♡";
      })
      .catch(() => {
        songStatus.textContent = "Add your authorised audio file first.";
      });
  } else {
    song.pause();
    playButton.textContent = "▶ Play";
    songStatus.textContent = "Paused";
  }
});


/* When song ends */

song.addEventListener("ended", () => {
  playButton.textContent = "▶ Play";
  songStatus.textContent = "A song for you ♡";
});
