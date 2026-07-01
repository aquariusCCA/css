---
source:
  - 'origin/120-背景屬性/09-設置背景圖的原點background-origin.md / 全文'
---

# background-origin 背景圖原點

參考文章：[CSS背景属性,background-origin和background-clip](https://blog.csdn.net/w875471321/article/details/120802835)

`background-origin` 用來控制背景圖片的位置。

屬性值如下：

1. `padding-box`：默認值，從 `padding` 區域開始顯示背景圖像。
2. `border-box`：從 `border` 區域開始顯示背景圖像。
3. `content-box`：從 `content` 區域開始顯示背景圖像。

```css
.box {
  width: 600px;
  height: 500px;
  padding: 50px;
  border: 20px dotted blueviolet;
  background: url(./images/logo.png) no-repeat;
  background-origin: border-box;
  /* background-origin: content-box; */
}
```

```html
<div class="box"></div>
```
