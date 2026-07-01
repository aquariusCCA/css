---
source:
  - 'origin/320-BFC/01-BFC.md / # 何時會建立 BFC'
---

# 建立 BFC 的條件

對於「什麼時候會建立一個 BFC」，其實 [W3C](https://www.w3.org/TR/css-display-3/#block-formatting-context) 並沒有一個非常正式的定義，有些條件是非常不嚴謹的，而在 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context) 上則有逐一詳細列出，可供參考。

> 根據 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)，以下情況的元素會創建 Block Formatting Context(BFC)：
>
> - <html>
> - float 元素
> - position: absolute、fixed 的元素
> - overflow: hidden、scroll、auto 的元素
> - display: inline-block 的元素
> - display: flow-root 的元素
> - display: flex 或 inline-flex 元素的 `直接子元素`，即 flex items
> - display: grid 或 inline-grid 元素的 `直接子元素`，即 grid items
> - display: table、table-caption、table-cell、table-rowtable-row-group、table-header-group、table-footer-groupinline-table
> - contain: layout、content 或 paint 的元素
> - column-count 或 column-width 不為 auto 的元素
> - column-span 為 all 的元素
