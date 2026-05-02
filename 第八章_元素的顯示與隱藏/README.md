# 第八章 元素的顯示與隱藏

## 章節導讀

這一章整理 CSS 中和「顯示、隱藏、溢出處理、互動狀態、動畫切換」相關的重點屬性與實戰觀念。

核心會比較：

- `overflow`
- `overflow-x`
- `overflow-y`
- `display: none`
- `visibility: hidden`
- `opacity: 0`
- `pointer-events: none`

本章重點不是只背屬性，而是理解：

- 元素是否看得見
- 元素是否保留版面位置
- 元素是否仍可被點擊
- 是否適合做動畫
- 在 Vue / JS 互動中該怎麼選

## 章節內容

- [第08章_元素的顯示與隱藏](./第08章_元素的顯示與隱藏.md)

## 閱讀順序

1. 先看「這一章先抓結論」
2. 再看 `overflow`、`display`、`visibility`、`opacity` 的個別說明
3. 接著看比較表
4. 最後看 Vue、Modal、Dropdown、動畫相關實戰情境

## 回查入口

- 想確認內容超出盒子時怎麼處理，先看 `overflow`
- 想只控制水平或垂直捲軸，先看 `overflow-x / overflow-y`
- 想讓元素整個從版面消失，先看 `display: none`
- 想讓元素看不見但保留位置，先看 `visibility: hidden`
- 想做淡入淡出動畫，先看 `opacity`
- 想避免透明元素仍然可以被點擊，先看 `pointer-events: none`
- 想判斷 Vue 裡該用 `v-if` 還是 `v-show`，先看 Vue 實戰比較
- 想處理 Dropdown / Tooltip 被裁切問題，先看 `overflow: hidden` 的實戰坑
- 想快速分辨 `display: none`、`visibility: hidden`、`opacity: 0`，先看比較表

## 30 秒複習入口

- `overflow`：控制盒子內容超出時怎麼顯示
- `display: none`：元素整個不顯示，也不占位置
- `visibility: hidden`：元素看不見，但位置還在
- `opacity: 0`：元素透明，但位置還在，而且可能仍可點擊
- `pointer-events: none`：讓元素不接收滑鼠事件