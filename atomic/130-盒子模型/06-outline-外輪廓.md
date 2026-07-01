---
source:
  - 'origin/130-盒子模型/05-邊框外輪廓outline.md / 全文'
---

# outline 外輪廓

`outline` 是邊框外圍線條的設定，可以設定線條寬度、顏色以及樣式。

![outline 位於 border 外側且不占盒子尺寸的示意圖](../../origin/130-盒子模型/assets/images/box-outline-img-001-d80535.png)

簡寫格式：

```css
outline: outline-color outline-style outline-width
```

屬性值：

- `outline-color`：設定輪廓顏色。
- `outline-style`：設定輪廓樣式。
- `outline-width`：設定輪廓寬度。

`outline` 與 `border` 的區別：

- `border` 會成為盒子尺寸的一部分，而 `outline` 繪製在元素外圍，不佔用版面空間。
- `outline` 可套用於元素；瀏覽器常會在可聚焦元素 focus 時顯示預設外輪廓，並在 blur 後取消。
- `outline` 不佔空間，不會像 `border` 那樣影響元素尺寸或位置，也不會增加額外的 `width` 或 `height`。

```css
.outlined-element {
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  margin: 20px;
  outline: 2px solid #3498db;
}
```

```html
<div class="outlined-element">This is an outlined element</div>
```

給表單添加 `outline: 0;` 或 `outline: none;` 樣式後，可以去掉預設的 focus 輪廓；若移除預設輪廓，應提供其他清楚的 focus 樣式。

```css
input {
  /* 取消表單輪廓 */
  outline: none;
}
```

```html
<body>
  <!-- 取消表單輪廓 -->
  <input type="text">
</body>
```
