const samplePage = document.querySelector("#samplePage");
const cssCode = document.querySelector("#cssCode");
const buttons = document.querySelectorAll("[data-mode]");

const snippets = {
    none: "/* 尚未套用 CSS，瀏覽器只使用預設樣式。 */",
    basic: `h1 {
    color: #b45309;
    font-size: 40px;
}

p {
    font-size: 18px;
    line-height: 1.8;
}`,
    layout: `.sample-page {
    display: grid;
    gap: 18px;
    padding: 34px;
    background: #eef7f5;
}

ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`
};

function setMode(mode) {
    samplePage.className = `sample-page mode-${mode}`;
    cssCode.textContent = snippets[mode];

    buttons.forEach((button) => {
        const active = button.dataset.mode === mode;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
});

setMode("none");
