const overflowText = document.querySelector("#overflowText");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");
const buttons = document.querySelectorAll("[data-mode]");

const modes = {
    clip: {
        text: `white-space: nowrap;
overflow: hidden;
text-overflow: clip;`,
        note: "clip 會直接裁剪超出的文字。"
    },
    ellipsis: {
        text: `white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;`,
        note: "單行省略需要 nowrap、overflow hidden 與 ellipsis 三個條件。"
    },
    missing: {
        text: `text-overflow: ellipsis;`,
        note: "只寫 text-overflow 通常不會看到省略號，因為沒有形成受控溢出。"
    },
    multiline: {
        text: `overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;`,
        note: "多行省略常用 line-clamp 寫法，但要注意瀏覽器支援。"
    }
};

function setMode(mode) {
    overflowText.removeAttribute("style");
    modes[mode].text.split("\n").forEach((line) => {
        const [prop, rawValue] = line.replace(";", "").split(":");
        if (prop && rawValue) {
            overflowText.style.setProperty(prop.trim(), rawValue.trim());
        }
    });
    cssCode.textContent = `.title {
    ${modes[mode].text.split("\n").join("\n    ")}
}`;
    resultText.textContent = modes[mode].note;
    buttons.forEach((button) => {
        const active = button.dataset.mode === mode;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
});

setMode("clip");
