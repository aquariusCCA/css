const toggleConfigs = [
  {
    button: document.querySelector("#toggleBasic"),
    target: document.querySelector("#basicLab"),
    activeText: "回到原狀",
    idleText: "切換狀態",
  },
  {
    button: document.querySelector("#toggleMistake"),
    target: document.querySelector("#mistakeLab"),
    activeText: "移出狀態",
    idleText: "切換狀態",
  },
  {
    button: document.querySelector("#toggleScope"),
    target: document.querySelector("#scopeLab"),
    activeText: "回到原狀",
    idleText: "切換狀態",
  },
];

for (const config of toggleConfigs) {
  config.button.addEventListener("click", () => {
    const isActive = config.target.classList.toggle("is-active");
    config.button.setAttribute("aria-pressed", String(isActive));
    config.button.textContent = isActive ? config.activeText : config.idleText;
  });
}

const motionButton = document.querySelector("#toggleMotion");
const motionLab = document.querySelector("#motionLab");
const motionCode = document.querySelector("#motionCode");
const motionSettings = {
  duration: "500ms",
  easing: "ease",
  delay: "0s",
};

function renderMotionSettings() {
  motionLab.style.setProperty("--demo-duration", motionSettings.duration);
  motionLab.style.setProperty("--demo-easing", motionSettings.easing);
  motionLab.style.setProperty("--demo-delay", motionSettings.delay);
  motionCode.textContent = `.box {
  transition: left ${motionSettings.duration} ${motionSettings.easing} ${motionSettings.delay},
              background-color ${motionSettings.duration} ${motionSettings.easing} ${motionSettings.delay};
}`;
}

motionButton.addEventListener("click", () => {
  const isActive = motionLab.classList.toggle("is-active");
  motionButton.setAttribute("aria-pressed", String(isActive));
  motionButton.textContent = isActive ? "重置位置" : "播放過渡";
});

document.querySelectorAll(".control-group").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest(".option-button");
    if (!button) return;

    group.querySelectorAll(".option-button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    motionSettings[group.dataset.control] = button.dataset.value;
    renderMotionSettings();
  });
});

renderMotionSettings();
