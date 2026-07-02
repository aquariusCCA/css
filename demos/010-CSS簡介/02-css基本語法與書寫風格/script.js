const cssCode = document.querySelector("#cssCode");
const formatButtons = document.querySelectorAll("[data-format]");
const highlightButtons = document.querySelectorAll("[data-highlight]");
const colorSelect = document.querySelector("#colorSelect");
const sizeRange = document.querySelector("#sizeRange");
const sizeOutput = document.querySelector("#sizeOutput");
const sampleHeading = document.querySelector("#sampleHeading");

let currentFormat = "expanded";
let currentHighlight = "selector";

const colorMap = {
    red: "red",
    teal: "#0f766e",
    purple: "#7e22ce"
};

function token(text, part) {
    return `<span class="token" data-part="${part}">${text}</span>`;
}

function renderCode() {
    const color = colorSelect.value;
    const size = `${sizeRange.value}px`;

    if (currentFormat === "compact") {
        cssCode.innerHTML = [
            token("h1", "selector"),
            token("{", "block"),
            token("color", "property"),
            token(":", "punctuation"),
            token(color, "value"),
            token(";", "punctuation"),
            token("font-size", "property"),
            token(":", "punctuation"),
            token(size, "value"),
            token(";", "punctuation"),
            token("}", "block")
        ].join("");
        return;
    }

    cssCode.innerHTML = `${token("h1", "selector")} ${token("{", "block")}
    ${token("color", "property")}${token(":", "punctuation")} ${token(color, "value")}${token(";", "punctuation")}
    ${token("font-size", "property")}${token(":", "punctuation")} ${token(size, "value")}${token(";", "punctuation")}
${token("}", "block")}`;
}

function renderPreview() {
    sampleHeading.style.color = colorMap[colorSelect.value];
    sampleHeading.style.fontSize = `${sizeRange.value}px`;
    sizeOutput.textContent = `${sizeRange.value}px`;
}

function setFormat(format) {
    currentFormat = format;
    formatButtons.forEach((button) => {
        const active = button.dataset.format === format;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    renderCode();
}

function setHighlight(part) {
    currentHighlight = part;
    cssCode.className = `highlight-${part}`;
    highlightButtons.forEach((button) => {
        const active = button.dataset.highlight === part;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

formatButtons.forEach((button) => {
    button.addEventListener("click", () => setFormat(button.dataset.format));
});

highlightButtons.forEach((button) => {
    button.addEventListener("click", () => setHighlight(button.dataset.highlight));
});

colorSelect.addEventListener("change", () => {
    renderCode();
    renderPreview();
});

sizeRange.addEventListener("input", () => {
    renderCode();
    renderPreview();
});

setFormat(currentFormat);
setHighlight(currentHighlight);
renderPreview();
