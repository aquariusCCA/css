---
source:
  - 'origin/120-背景屬性/11-背景圖片大小background-size.md / # 實現響應式背景圖片'
---

# background-size 響應式背景圖片

實現響應式背景圖片的基本原理是使用保持元素寬高比的技巧，為元素加垂直方向 `padding-top` 值，並使用百分比形式。

原始筆記給出的計算方式如下：

```css
padding-top = (高度 / 寬度) * 100% = (355.5 / 474) * 100% = 75%
```

```css
.column {
  max-width: 640px;
}

.figure {
  padding-top: 65.46%;
  background: url(./images/ldh.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
```

```html
<img src="./images/ldh.jpg" alt="">
<h3>使用padding-top实现响应性图片(图片的宽度是640px，高度是419px)</h3>
<div class="column">
  <div class="figure"></div>
</div>
```
