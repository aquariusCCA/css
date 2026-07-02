const sample = document.querySelector("#sample");
const buttons = document.querySelectorAll("[data-selector]");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");

const explanations = {
    "div, .box": "逗號是並集，選中所有 div，也選中所有 .box。",
    "div.box": "無空格是交集，只選同時是 div 且有 box 類名的元素。",
    "div .box": "空格是後代，只選 div 裡面的 .box。",
    "p.box": "交集也可用在 p，只選同時是 p 且有 box 類名的元素。"
};

function applySelector(selector) {
    sample.querySelectorAll(".matched").forEach((element) => element.classList.remove("matched"));
    const matches = [...sample.querySelectorAll(selector)];
    matches.forEach((element) => element.classList.add("matched"));
    cssCode.textContent = `${selector} {
    color: #9a3412;
    border-color: #f97316;
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

applySelector("div, .box");
