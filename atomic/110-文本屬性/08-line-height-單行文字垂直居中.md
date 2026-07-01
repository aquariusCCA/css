---
source:
  - 'origin/110-文本屬性/07-行間距line-height.md / # 單行文字垂直居中'
---

# line-height 單行文字垂直居中

CSS 沒有提供文字垂直居中的專用代碼，但可以用一個小技巧來實現單行文字垂直居中。

解決方案是讓文字的行高等於盒子的高度，就可以讓文字在當前盒子內垂直居中。

![盒子高度與行高相同時單行文字垂直居中的示意圖](../../origin/110-文本屬性/assets/images/line-height-img-002-d09232.png)

簡單理解：

1. 行高的上空隙和下空隙把文字擠到中間。
2. 如果行高小於盒子高度，文字會偏上。
3. 如果行高大於盒子高度，文字會偏下。

```css
div {
  width: 200px;
  height: 40px;
  background-color: pink;
  line-height: 40px;
}
```

```html
<div>我要居中</div>
```
