---
source:
  - 'origin/290-媒體查詢/03-媒體特性.md / ## 方向（orientation）'
---

# orientation 方向媒體特性

CSS 中的 `orientation` 媒體特徵用於檢測視口方向，常用來在縱向與橫向顯示時套用不同樣式。它通常會搭配 `width`、`height`、`min-width` 等媒體特徵一起使用，讓響應式設計能更精確地調整版面。

## orientation 的值

- `portrait`：表示縱向模式，通常是視口高度大於或等於寬度。
- `landscape`：表示橫向模式，通常是視口寬度大於高度。

## 使用範例

```css
/* 當設備處於縱向模式時應用 */
@media (orientation: portrait) {
  body {
    background-color: lightblue;
  }

  .container {
    padding: 20px;
  }
}

/* 當設備處於橫向模式時應用 */
@media (orientation: landscape) {
  body {
    background-color: lightgreen;
  }

  .container {
    padding: 40px;
  }
}
```

## 使用情境

`orientation` 可以用來根據顯示方向調整字體大小、間距、排版、導航或側邊欄位置。例如手機或平板旋轉時，縱向模式可能適合單欄佈局，橫向模式則可能適合多欄佈局。

使用 `orientation` 時仍要搭配不同設備與視口尺寸測試，避免只依賴方向判斷而忽略實際可用空間。
