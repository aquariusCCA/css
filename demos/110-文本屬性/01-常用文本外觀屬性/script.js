const previewText = document.querySelector("#previewText");
const cssCode = document.querySelector("#cssCode");
const controls = {
    color: document.querySelector("#colorSelect"),
    align: document.querySelector("#alignSelect"),
    decoration: document.querySelector("#decorationSelect"),
    indent: document.querySelector("#indentSelect"),
    shadow: document.querySelector("#shadowToggle")
};

function render() {
    const shadow = controls.shadow.checked ? "4px 4px 8px rgba(0, 0, 0, .28)" : "none";
    previewText.style.color = controls.color.value;
    previewText.style.textAlign = controls.align.value;
    previewText.style.textDecoration = controls.decoration.value;
    previewText.style.textIndent = controls.indent.value;
    previewText.style.textShadow = shadow;

    cssCode.textContent = `.text-demo {
    color: ${controls.color.value};
    text-align: ${controls.align.value};
    text-decoration: ${controls.decoration.value};
    text-indent: ${controls.indent.value};
    text-shadow: ${shadow};
}`;
}

Object.values(controls).forEach((control) => {
    control.addEventListener("input", render);
    control.addEventListener("change", render);
});

render();
