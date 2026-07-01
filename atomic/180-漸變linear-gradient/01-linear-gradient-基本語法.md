---
source:
  - 'origin/180-漸變linear-gradient/01-漸變linear-gradient.md / 參考文章、### 範例程式碼'
---

# linear-gradient 基本語法

`linear-gradient()` 可用來建立線性漸層，常搭配 `background-image` 使用。多個顏色值以逗號分隔，瀏覽器會依序在這些顏色之間產生漸層效果。

```css
.box {
  width: 200px;
  height: 200px;
  /* 逗號隔開多個值，從透明到半透明。 */
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .5));
}
```

```html
<body>
  <div class="box"></div>
</body>
```

## 參考文章

- [CSS 径向渐变](https://www.w3school.com.cn/css/css3_gradients_radial.asp)
- [CSS 渐变](https://www.w3school.com.cn/css/css3_gradients.asp)
