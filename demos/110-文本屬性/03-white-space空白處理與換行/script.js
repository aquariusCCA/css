const sampleText = document.querySelector("#sampleText");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");
const buttons = document.querySelectorAll("[data-value]");

const notes = {
    normal: "合併空白，原始換行視為空格，文字會自動換行。",
    pre: "保留空白與換行，但不自動換行。",
    "pre-wrap": "保留空白與換行，也允許自動換行。",
    "pre-line": "保留換行，但合併多餘空白。",
    nowrap: "合併空白，強制單行不換行。"
};

function setValue(value) {
    sampleText.style.whiteSpace = value;
    cssCode.textContent = `.text-box {
    white-space: ${value};
}`;
    resultText.textContent = notes[value];
    buttons.forEach((button) => {
        const active = button.dataset.value === value;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => setValue(button.dataset.value));
});

setValue("normal");
