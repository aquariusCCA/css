const buttons = document.querySelectorAll("[data-state]");
const demoLink = document.querySelector("#demoLink");
const nameInput = document.querySelector("#nameInput");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");

const snippets = {
    link: `a:link {
    color: #1f2937;
}`,
    visited: `a:visited {
    color: purple;
}`,
    hover: `a:hover {
    color: red;
}`,
    active: `a:active {
    color: orange;
}`,
    focus: `input:focus {
    background-color: #ecfdf5;
    outline: 3px solid rgba(15, 118, 110, 0.35);
}`
};

const explanations = {
    link: ":link 表示尚未訪問的連結。",
    visited: ":visited 表示已訪問的連結。",
    hover: ":hover 表示滑鼠移到元素上方。",
    active: ":active 表示按下但尚未放開。",
    focus: ":focus 表示元素取得鍵盤或滑鼠焦點。"
};

function setState(state) {
    demoLink.className = `demo-link state-${state}`;
    cssCode.textContent = snippets[state];
    resultText.textContent = explanations[state];

    if (state === "focus") {
        nameInput.focus();
    } else {
        nameInput.blur();
    }

    buttons.forEach((button) => {
        const active = button.dataset.state === state;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => setState(button.dataset.state));
});

setState("link");
