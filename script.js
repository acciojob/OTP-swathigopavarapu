//your JS code here. If required.
// Get elements
const video = document.querySelector(".video");
const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");
const progress = document.querySelector(".progress");
const timestamp = document.querySelector(".timestamp");
const volumeSlider = document.querySelector(".volume");
const muteBtn = document.querySelector(".mute");
const skipForward = document.querySelector(".forward");
const skipBackward = document.querySelector(".backward");

// Toggle video play/pause
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = "⏸"; // pause icon
  } else {
    video.pause();
    playBtn.innerHTML = "▶️"; // play icon
  }
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
  playBtn.innerHTML = "▶️";
}

// Update progress bar & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Format time mm:ss
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Volume control
function changeVolume() {
  video.volume = volumeSlider.value;
}

// Mute/Unmute video
function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteBtn.innerHTML = "🔊";
  } else {
    video.muted = true;
    muteBtn.innerHTML = "🔇";
  }
}

// Skip forward
function skipVideoForward() {
  video.currentTime += 10; // skip 10 seconds
}

// Skip backward
function skipVideoBackward() {
  video.currentTime -= 10; // back 10 seconds
}

// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("timeupdate", updateProgress);

playBtn.addEventListener("click", toggleVideoStatus);
stopBtn.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);

volumeSlider.addEventListener("input", changeVolume);
muteBtn.addEventListener("click", toggleMute);

skipForward.addEventListener("click", skipVideoForward);
skipBackward.addEventListener("click", skipVideoBackward);
