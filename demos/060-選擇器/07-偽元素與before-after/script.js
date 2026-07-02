const sample = document.querySelector("#sample");
const buttons = document.querySelectorAll("[data-mode]");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");

const snippets = {
    "first-letter": `p::first-letter {
    font-size: 3.8rem;
    color: #be123c;
}`,
    "first-line": `p::first-line {
    color: #1d4ed8;
    font-weight: 800;
}`,
    selection: `p::selection {
    color: #fff;
    background: #be123c;
}`,
    "before-after": `p::before {
    content: "裝飾前綴";
}

p::after {
    content: " 裝飾後綴";
}`,
    "no-content": `p::before {
    color: #be123c;
}

/* 沒有 content 時，before/after 通常不會顯示。 */`
};

const explanations = {
    "first-letter": "::first-letter 只影響第一個字。",
    "first-line": "::first-line 的範圍會隨容器寬度改變。",
    selection: "::selection 會在使用者選取文字時生效。",
    "before-after": "::before 與 ::after 可建立裝飾性內容。",
    "no-content": "缺少 content 時，::before / ::after 通常看不到效果。"
};

function setMode(mode) {
    sample.className = `sample mode-${mode}`;
    cssCode.textContent = snippets[mode];
    resultText.textContent = explanations[mode];

    buttons.forEach((button) => {
        const active = button.dataset.mode === mode;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
});

setMode("first-letter");
