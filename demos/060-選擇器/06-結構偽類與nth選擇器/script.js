const buttons = document.querySelectorAll("[data-selector]");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");

const explanations = {
    ".list li:first-child": "選中第一個 li。",
    ".list li:last-child": "選中最後一個 li。",
    ".list li:nth-child(even)": "選中偶數序號，序號從 1 開始。",
    ".list li:nth-child(n + 3)": "選中第 3 個開始往後的 li。",
    ".list li:nth-child(-n + 3)": "選中前 3 個 li。",
    ".mixed p:nth-child(2)": "先看所有子元素，第 2 個剛好是 p 才選中。",
    ".mixed p:nth-of-type(2)": "先只看 p，再選第 2 個 p。"
};

function clearMatches() {
    document.querySelectorAll(".matched").forEach((element) => element.classList.remove("matched"));
}

function applySelector(selector) {
    clearMatches();
    const matches = [...document.querySelectorAll(selector)];
    matches.forEach((element) => element.classList.add("matched"));
    cssCode.textContent = `${selector} {
    background: #fef9c3;
    border-color: #eab308;
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

applySelector(".list li:first-child");
