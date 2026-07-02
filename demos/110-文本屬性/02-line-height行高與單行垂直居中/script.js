const fontSize = document.querySelector("#fontSize");
const lineHeight = document.querySelector("#lineHeight");
const boxHeight = document.querySelector("#boxHeight");
const paragraph = document.querySelector("#paragraph");
const badge = document.querySelector("#badge");
const hint = document.querySelector("#hint");
const cssCode = document.querySelector("#cssCode");
const fontSizeOut = document.querySelector("#fontSizeOut");
const lineHeightOut = document.querySelector("#lineHeightOut");
const boxHeightOut = document.querySelector("#boxHeightOut");

function render() {
    const font = `${fontSize.value}px`;
    const line = `${lineHeight.value}px`;
    const height = `${boxHeight.value}px`;
    paragraph.style.fontSize = font;
    paragraph.style.lineHeight = line;
    badge.style.height = height;
    badge.style.lineHeight = line;
    fontSizeOut.textContent = font;
    lineHeightOut.textContent = line;
    boxHeightOut.textContent = height;
    hint.textContent = lineHeight.value === boxHeight.value
        ? "行高等於盒高，單行文字看起來垂直居中。"
        : "行高與盒高不同，文字會偏上或偏下。";
    cssCode.textContent = `p {
    font-size: ${font};
    line-height: ${line};
}

.badge {
    height: ${height};
    line-height: ${line};
}`;
}

[fontSize, lineHeight, boxHeight].forEach((input) => input.addEventListener("input", render));
render();
