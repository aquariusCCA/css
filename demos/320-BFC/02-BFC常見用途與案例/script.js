const cases = {
  "float-collapse": {
    title: "讓父容器建立 BFC",
    code: `.container {
  display: flow-root;
}`
  },
  "margin-collapse": {
    title: "讓其中一方進入新的 BFC",
    code: `.wrap {
  display: flow-root;
}

.wrap p {
  margin-top: 40px;
}`
  },
  "float-avoid": {
    title: "讓普通 block 建立 BFC",
    code: `.box {
  display: flow-root;
}`
  }
};

const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll("[data-case-panel]");
const caseTitle = document.querySelector("#caseTitle");
const caseCode = document.querySelector("#caseCode");

function activateCase(caseName) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.case === caseName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.casePanel === caseName);
  });

  caseTitle.textContent = cases[caseName].title;
  caseCode.textContent = cases[caseName].code;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => activateCase(button.dataset.case));
});

activateCase("float-collapse");
