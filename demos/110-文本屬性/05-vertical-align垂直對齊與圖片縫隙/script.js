const fakeImage = document.querySelector("#fakeImage");
const fakePhoto = document.querySelector("#fakePhoto");
const textarea = document.querySelector("#textarea");
const cssCode = document.querySelector("#cssCode");
const resultText = document.querySelector("#resultText");
const buttons = document.querySelectorAll("[data-mode]");

const notes = {
    baseline: "baseline 是預設值，行內塊會和文字基線對齊，圖片底側可能留下縫隙。",
    top: "top 讓行內塊頂端對齊該行頂端。",
    middle: "middle 常用於圖片或表單和文字同排時的視覺居中。",
    bottom: "bottom 讓行內塊底端靠近該行底端。",
    block: "display:block 讓圖片不再參與行內基線對齊，底側縫隙會消失。"
};

function setMode(mode) {
    fakeImage.style.display = "inline-block";
    fakePhoto.style.display = "inline-block";
    fakeImage.style.verticalAlign = mode;
    textarea.style.verticalAlign = mode;
    fakePhoto.style.verticalAlign = mode;

    let css = `img,
textarea {
    vertical-align: ${mode};
}`;

    if (mode === "block") {
        fakePhoto.style.display = "block";
        css = `img {
    display: block;
}`;
    }

    cssCode.textContent = css;
    resultText.textContent = notes[mode];
    buttons.forEach((button) => {
        const active = button.dataset.mode === mode;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
});

setMode("baseline");
