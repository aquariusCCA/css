---
source:
  - 'origin/130-盒子模型/04-邊框border.md / # 邊框會影響盒子實際大小'
---

# border 影響盒子實際大小

邊框會額外增加盒子的實際大小。

![border 會增加盒子實際寬高的示意圖](../../origin/130-盒子模型/assets/images/box-border-img-002-4b487b.png)

處理邊框尺寸時，可以採用兩種思路：

- 測量盒子大小時，不把邊框算進去。
- 如果測量時已包含邊框，則需要讓 `width` / `height` 減去邊框寬度。

```css
/* 原始筆記示例：需要一個 400 * 40 的盒子，但是盒子有 10 像素紅色邊框 */
div {
  width: 380px;
  height: 380px;
  background-color: pink;
  border: 10px solid red;
}
```

```html
<div></div>
```

> 待後續內容審查確認：原始筆記文字寫「400 * 40」，但程式碼使用 `380px` / `380px`，可能是 `400 * 400` 的筆誤。
