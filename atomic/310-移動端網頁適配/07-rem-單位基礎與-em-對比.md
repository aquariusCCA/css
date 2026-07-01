---
source:
  - 'origin/310-移動端網頁適配/05-rem適配布局.md / 開頭問題'
  - 'origin/310-移動端網頁適配/05-rem適配布局.md / # rem基礎'
---

# rem 單位基礎與 em 對比

我們來看幾個問題：

1. 頁面佈局文字能否隨著屏幕大小變化而變化？
2. `流式佈局` 和 `flex佈局` 主要針對於寬度佈局，那高度如何設置？
3. 怎麼樣讓屏幕發生變化的時候元素高度和寬度等比例縮放？

## rem 基礎

- `rem` 是一個相對單位，類似於 `em`，`em` 是父元素字體大小。
- 不同的是 `rem` 的基準是相對於 `html` 元素的字體大小。

    ![rem 根字級控制元素尺寸示意圖](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-001-0528d3.png)

    - 比如，根元素（html）設置 `font-size=12px;` 非根元素設置 `width:2rem;` 則換成 `px` 表示就是 `24px`。
    - `rem` 的優勢：父元素文字大小可能不一致，但是整個頁面只有一個 `html`，可以很好來控制整個頁面的元素大小。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    html {
      font-size: 12px;
    }

    div {
      font-size: 12px;
      width: 15rem;
      height: 15rem;
      background-color: purple;
    }

    p {
      /* 1. em相对于父元素 的字体大小来说的 */
      /* width: 10em;
      height: 10em; */

      /* 2. rem 相对于 html元素 字体大小来说的 */
      width: 10rem;
      height: 10rem;
      background-color: pink;
    }
  </style>
</head>

<body>
  <div>
    <p></p>
  </div>
</body>

</html>
```
