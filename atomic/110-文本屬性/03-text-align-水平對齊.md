---
source:
  - 'origin/110-文本屬性/03-對齊文本text-align.md / 全文'
---

# text-align 水平對齊

`text-align` 屬性用於設置元素內文本內容的水平對齊方式。

![text-align 屬性值與文字對齊方式表](../../origin/110-文本屬性/assets/images/text-align-img-001-e6b11e.png)

注意：如果需要讓文本水平居中，`text-align` 屬性要給文本所在標籤，也就是文本的父元素設置。

```css
h1 {
  /* 本質是讓 h1 盒子裡面的文字水平居中對齊 */
  text-align: center;
}
```

```html
<h1>居中對齊的標題</h1>
```
