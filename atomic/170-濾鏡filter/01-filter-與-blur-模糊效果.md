---
source:
  - 'origin/170-濾鏡filter/01-濾鏡filter.md / 全文'
---

# filter 與 blur 模糊效果

`filter` 是 CSS 屬性，可將模糊、顏色偏移等圖形效果套用在元素上，常見用途之一是讓圖片產生模糊效果。

```css
filter: 函數();

filter: blur(5px);
```

`blur()` 是 `filter` 的函數值之一，用來設定模糊程度。括號中的數值越大，元素就越模糊；設定時需要帶上長度單位，例如 `px`。

![Firefox 標誌套用模糊濾鏡前後對比](../../origin/170-濾鏡filter/assets/images/css-filter-img-001-50019e.png)

```css
img {
  /* blur 是一個函數，括號內的數值越大，圖片越模糊，注意數值要加 px 單位 */
  filter: blur(5px);
}
```

```html
<body>
  <img src="../../origin/170-濾鏡filter/assets/images/css-filter-img-002-354aea.jpg" alt="穿黑色西裝揮手的男士照片">
</body>
```
