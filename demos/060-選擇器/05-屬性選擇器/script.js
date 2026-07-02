const sample = document.querySelector("#sample");
const buttons = document.querySelectorAll("[data-selector]");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");

const explanations = {
    "input[value]": "選中具有 value 屬性的 input，不要求 value 是什麼。",
    "input[type=\"text\"]": "選中 type 屬性值等於 text 的 input。",
    "div[class^=\"icon\"]": "選中 class 屬性字串以 icon 開頭的 div。",
    "section[class$=\"data\"]": "選中 class 屬性字串以 data 結尾的 section。"
};

function applySelector(selector) {
    sample.querySelectorAll(".matched").forEach((element) => element.classList.remove("matched"));
    const matches = [...sample.querySelectorAll(selector)];
    matches.forEach((element) => element.classList.add("matched"));
    cssCode.textContent = `${selector} {
    border-color: #22c55e;
    background: #f0fdf4;
}`;
    resultText.textContent = `${explanations[selector]}目前選中 ${matches.length} 個元素。`;

    buttons.forEach((button) => {
        const active = button.dataset.selector === selector;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => applySelector(button.dataset.selector));
});

applySelector("input[value]");
