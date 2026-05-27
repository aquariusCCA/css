# CSS 的引入方式 Demo

來源筆記：`notes/第03章_CSS的引入方式/CSS的引入方式.md`

本目錄將「CSS 的引入方式」拆成四個單一概念 demo。每個 demo 都可以直接用瀏覽器開啟該目錄中的 `index.html`。

| Demo | 觀察重點 |
|---|---|
| `01-inline-style-scope` | 行內樣式只作用在寫了 `style` attribute 的單一元素 |
| `02-internal-style-page-scope` | 內部樣式表集中在同一份 HTML 中，能套用到本頁符合 selector 的元素 |
| `03-external-stylesheet-sharing` | 多個 HTML 頁面共同引用同一份外部 CSS 檔案 |
| `04-link-load-check` | 外部 CSS 沒效果時，先檢查 `link`、`rel` 與 `href` |

這些 demo 不使用框架、外部 CDN、建置工具或 JavaScript。
