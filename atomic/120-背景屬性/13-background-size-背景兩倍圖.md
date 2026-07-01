---
source:
  - 'origin/120-背景屬性/11-背景圖片大小background-size.md / # 背景兩倍圖'
---

# background-size 背景兩倍圖

背景兩倍圖的思路是：有一個 `50 * 50` 的盒子需要一個背景圖片，但圖片準備 2 倍的 `100 * 100`，再用 `background-size` 把圖片縮放一半，也就是 `50 * 50`。

```css
/* 1. 我們有一個 50*50 的盒子需要一個背景圖片，但是根據分析這個圖片還是準備 2 倍的 100*100 */
/* 2. 我們需要把這個圖片縮放一半，也就是 50 * 50 (使用 background-size) */
div {
  width: 50px;
  height: 50px;
  border: 1px;
  background: url(./images/ldh.jpg) no-repeat;
  background-size: 50px 50px;
}
```

```html
<div></div>
```
