---
source:
  - 'origin/120-背景屬性/03-背景圖片background-image.md / 全文'
---

# background-image 背景圖片

`background-image` 屬性描述了元素的背景圖像。實際開發常見於 logo、裝飾性的小圖片，或者超大的背景圖片，優點是非常便於控制位置。

```css
background-image: url(图片路径);
```

注意點：

1. 背景圖片中 URL 的引號可以省略。
2. 背景圖片默認會在水平和垂直方向平鋪。
3. 背景圖片僅僅給盒子起到裝飾效果，類似於背景顏色，是不能撐開盒子的。

```css
div {
  width: 300px;
  height: 300px;
  background-image: url(./images/logo.png);
}
```

```html
<div></div>
```
