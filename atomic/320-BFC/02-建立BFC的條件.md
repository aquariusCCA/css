---
source:
  - 'origin/320-BFC/01-BFC.md / # 何時會建立 BFC'
---

# 建立 BFC 的條件

對於「什麼時候會建立一個 BFC」，其實 [W3C](https://www.w3.org/TR/css-display-3/#block-formatting-context) 並沒有一個非常正式的定義，有些條件是非常不嚴謹的，而在 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context) 上則有逐一詳細列出，可供參考。

> 根據 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)，常見會創建 Block Formatting Context(BFC) 的情況包含：
>
> - <html>
> - float 元素
> - position: absolute、fixed 的元素
> - 區塊元素的 overflow 值不是 visible 或 clip，例如 hidden、scroll、auto
> - display: inline-block 的元素
> - display: flow-root 的元素
> - display: flex 或 inline-flex 元素的 `直接子元素`，即 flex items，且該 item 本身不是 flex、grid 或 table container
> - display: grid 或 inline-grid 元素的 `直接子元素`，即 grid items，且該 item 本身不是 flex、grid 或 table container
> - display: table-cell、table-caption 的元素，以及 display: table、inline-table、table-row、table-row-group、table-header-group、table-footer-group 等 table 相關顯示值隱含產生的 table cell
> - contain: layout、content 或 paint 的元素
> - container-type 不為 normal 的元素
> - column-count 或 column-width 不為 auto 的元素
> - column-span 為 all 的元素
