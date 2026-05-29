# 元素的顯示與隱藏 Demo

來源筆記：`notes/第07章_元素的顯示與隱藏/元素的顯示與隱藏.md`

本目錄將「元素的顯示與隱藏」拆成四個單一概念 demo。每個 demo 都可以直接用瀏覽器開啟該子目錄中的 `index.html`。

| Demo | 觀察重點 |
|---|---|
| `01-display-none-removes-space` | `display: none` 會讓元素不顯示，也不保留原本位置 |
| `02-display-block-restores-box` | 將 `display: none` 改成 `display: block` 後，元素會重新以 block 盒子參與排版 |
| `03-visibility-hidden-keeps-space` | `visibility: hidden` 會讓元素不可見，但仍保留原本位置 |
| `04-overflow-clips-content` | `overflow` 處理的是內容溢出，不是把整個元素移出版面 |

這些 demo 不使用框架、外部 CDN、建置工具或 JavaScript。
