const scenarios = [...document.querySelectorAll(".scenario")];
const methods = [...document.querySelectorAll(".method")];
const rows = [...document.querySelectorAll("tbody tr")];
const answerText = document.querySelector("#answerText");
const exampleCode = document.querySelector("#exampleCode");

const scenarioData = {
  inline: {
    method: "inline",
    answer: "建議使用行內樣式表。它適合快速測試單一元素，但不適合大量使用。",
    code: `<p style="color: pink; font-size: 20px;">文字</p>`
  },
  internal: {
    method: "internal",
    answer: "建議使用內部樣式表。它適合練習選擇器，並集中控制目前頁面。",
    code: `<head>
  <style>
    p {
      color: pink;
    }
  </style>
</head>`
  },
  external: {
    method: "external",
    answer: "建議使用外部樣式表。多個 HTML 頁面可以共用同一份 CSS。",
    code: `<link rel="stylesheet" href="./style.css">`
  },
  "external-maintain": {
    method: "external",
    answer: "建議使用外部樣式表。樣式較多或需要長期維護時，HTML 與 CSS 分離更清楚。",
    code: `index.html
about.html
contact.html
style.css`
  }
};

function render(choice) {
  const data = scenarioData[choice];
  scenarios.forEach((scenario) => {
    scenario.classList.toggle("is-active", scenario.dataset.choice === choice);
  });
  methods.forEach((method) => {
    method.classList.toggle("is-match", method.dataset.method === data.method);
  });
  rows.forEach((row) => {
    row.classList.toggle("is-match", row.dataset.row === data.method);
  });
  answerText.textContent = data.answer;
  exampleCode.textContent = data.code;
}

scenarios.forEach((scenario) => {
  scenario.addEventListener("click", () => render(scenario.dataset.choice));
});

render("inline");
