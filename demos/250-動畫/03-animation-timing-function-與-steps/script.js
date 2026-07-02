const stepCount = document.querySelector("#stepCount");
const stepLabel = document.querySelector("#stepLabel");
const replay = document.querySelector("#replay");

function restartDemo() {
  document.querySelectorAll(".ball, .typing-text").forEach((node) => {
    node.style.animation = "none";
    void node.offsetWidth;
    node.style.animation = "";
  });
}

stepCount.addEventListener("change", () => {
  document.documentElement.style.setProperty("--steps", stepCount.value);
  stepLabel.textContent = stepCount.value;
  restartDemo();
});

replay.addEventListener("click", restartDemo);
