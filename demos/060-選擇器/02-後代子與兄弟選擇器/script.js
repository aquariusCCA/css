const sample = document.querySelector("#sample");
const buttons = document.querySelectorAll("[data-selector]");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");

const notes = {
    ".nav a": "空格代表後代，會選中 .nav 內所有層級的 a。",
    ".nav > a": "> 只選直接子元素，段落裡的 a 不會被選中。",
    "h2 + p": "+ 只選 h2 後方緊接的第一個 p。",
    "h2 ~ p": "~ 選 h2 後方所有同層 p。"
};

function applySelector(selector) {
    sample.querySelectorAll(".matched").forEach((element) => element.classList.remove("matched"));
    const matches = [...sample.querySelectorAll(selector)];
    matches.forEach((element) => element.classList.add("matched"));
    cssCode.textContent = `${selector} {
    border-color: #10b981;
    background: #ecfdf5;
}`;
    resultText.textContent = `${notes[selector]}目前選中 ${matches.length} 個元素。`;

    buttons.forEach((button) => {
        const active = button.dataset.selector === selector;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => applySelector(button.dataset.selector));
});

applySelector(".nav a");
