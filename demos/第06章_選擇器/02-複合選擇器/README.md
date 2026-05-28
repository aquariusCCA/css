# 複合選擇器 Demos

來源筆記：`notes/第06章_選擇器/02-複合選擇器.md`

本目錄包含 6 個複合選擇器 demo。每個 demo 都可以直接用瀏覽器開啟該子目錄中的 `index.html`。

| Demo | 主要知識點 | 入口 |
|---|---|---|
| 後代選擇器 | `.nav a` 選外層內所有層級的目標元素 | `descendant-selector/index.html` |
| 子選擇器 | `.menu > a` 只選直接子層 | `child-selector/index.html` |
| 相鄰兄弟選擇器 | `h3 + p` 只選緊接的下一個兄弟 | `adjacent-sibling-selector/index.html` |
| 通用兄弟選擇器 | `h3 ~ p` 選後方所有同層符合元素 | `general-sibling-selector/index.html` |
| 並集選擇器 | `h2, p, .note li` 讓多個 selector 共用樣式 | `group-selector/index.html` |
| 交集選擇器 | `p.box` 選同一元素同時符合多個條件 | `intersection-selector/index.html` |

每個子目錄都有自己的 `README.md`，說明觀察重點與常見誤解。
