const animationLab = document.querySelector("#animationLab");
const pauseAll = document.querySelector("#pauseAll");
const replayAll = document.querySelector("#replayAll");

pauseAll.addEventListener("change", () => {
  animationLab.classList.toggle("is-paused", pauseAll.checked);
});

replayAll.addEventListener("click", () => {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.style.animation = "none";
    void dot.offsetWidth;
    dot.style.animation = "";
  });
});
