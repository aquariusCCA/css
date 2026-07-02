const sample = document.querySelector("#sample");
const buttons = document.querySelectorAll("[data-selector]");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");

function getMatches(selector) {
    if (selector === "*") {
        return [...sample.children];
    }
    return [...sample.querySelectorAll(selector)];
}

function applySelector(selector) {
    sample.querySelectorAll(".matched").forEach((element) => element.classList.remove("matched"));
    const matches = getMatches(selector);
    matches.forEach((element) => element.classList.add("matched"));
    cssCode.textContent = `${selector} {
    outline: 3px solid #f59e0b;
    background: #fff7ed;
}`;
    resultText.textContent = `目前選中 ${matches.length} 個元素。`;

    buttons.forEach((button) => {
        const active = button.dataset.selector === selector;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => applySelector(button.dataset.selector));
});

applySelector("p");
