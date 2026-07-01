---
source:
  - 'origin/120-背景屬性/06-背景圖像固定background-attachment.md / 全文'
---

# background-attachment 背景圖像固定

`background-attachment` 屬性設置背景圖像是否固定，或者是否隨著頁面的其餘部分滾動。

`background-attachment` 後期可以製作視差滾動的效果。

```css
background-attachment: scroll | fixed
```

```css
/*
1. background-attachment 属性设置背景图像是否固定或者随着页面的其余部分滚动

2. 參數
    - scroll: 背景图像是随对象内容滚动
    - fixed: 背景图像固定
*/
body {
  background-image: url(./images/bg.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  color: #fff;
  font-size: 20px;

  /* 把背景图片固定住 */
  background-attachment: fixed;
}
```

```html
<body>
  <p>天王盖地虎, pink老师一米五</p>
  <p>天王盖地虎, pink老师一米五</p>
  <p>天王盖地虎, pink老师一米五</p>
  <p>天王盖地虎, pink老师一米五</p>
  <p>天王盖地虎, pink老师一米五</p>
  <p>天王盖地虎, pink老师一米五</p>
</body>
```
