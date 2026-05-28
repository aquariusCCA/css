# CSS 三大特性 Demo

來源筆記：`notes/第04章_CSS三大特性/CSS三大特性.md`

本目錄將「CSS 三大特性」拆成七個單一概念 demo。每個 demo 都可以直接用瀏覽器開啟該目錄中的 `index.html`。

| Demo | 觀察重點 |
|---|---|
| `01-cascade-source-order` | 同一 selector、同一屬性衝突時，後面的宣告勝出；未衝突的宣告仍保留 |
| `02-inheritance-text-vs-box` | 文字相關屬性常會繼承，盒模型相關屬性通常不會自動繼承 |
| `03-unitless-line-height` | 無單位 `line-height` 繼承的是比例，子元素會用自己的 `font-size` 計算行高 |
| `04-direct-style-over-inheritance` | `a` 與 `h1` 看似沒有繼承，通常是因為它們有直接套用的預設樣式 |
| `05-specificity-priority` | 不同 selector 同時選到同一元素時，先比較 specificity |
| `06-compound-specificity` | 複合選擇器會分組累加權重，但不會進位 |
| `07-inheritance-vs-direct-target` | 父元素權重再高，子元素若有直接宣告，仍會優先使用直接宣告 |

這些 demo 不使用框架、外部 CDN、建置工具或 JavaScript。
