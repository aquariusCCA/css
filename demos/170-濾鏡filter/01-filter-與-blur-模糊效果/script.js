const livePreview = document.querySelector("#live-preview");
const blurInput = document.querySelector("#blur-radius");
const blurOutput = document.querySelector("#blur-output");
const formulaValue = document.querySelector("#formula-value");
const captionValue = document.querySelector("#caption-value");

function updateBlurDemo() {
  const radius = Number(blurInput.value);
  const value = radius === 0 ? "0" : `${radius}px`;

  livePreview.style.setProperty("--blur-radius", value);
  blurOutput.value = value;
  formulaValue.textContent = value;
  captionValue.textContent = `blur(${value})`;
}

blurInput.addEventListener("input", updateBlurDemo);
updateBlurDemo();
