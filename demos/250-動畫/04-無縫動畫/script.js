const marqueePanel = document.querySelector("#marqueePanel");
const hideCopies = document.querySelector("#hideCopies");
const wrongDistance = document.querySelector("#wrongDistance");

function restartTrack() {
  const track = marqueePanel.querySelector(".track");
  track.style.animation = "none";
  void track.offsetWidth;
  track.style.animation = "";
}

hideCopies.addEventListener("change", () => {
  marqueePanel.classList.toggle("is-no-copy", hideCopies.checked);
  restartTrack();
});

wrongDistance.addEventListener("change", () => {
  marqueePanel.classList.toggle("is-wrong", wrongDistance.checked);
  restartTrack();
});
