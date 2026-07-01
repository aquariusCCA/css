---
source:
  - 'origin/140-CSS浮動/05-甚麼是浮動.md / 全文'
---

# float 基本語法與屬性值

`float` 屬性用於建立浮動框，將元素移動到一邊，直到左邊緣或右邊緣觸及包含塊或另一個浮動框的邊緣。

![float 屬性值 none left right 的作用表](../../origin/140-CSS浮動/assets/images/what-is-float-img-001-7ec351.png)

```css
選擇器 {
  float: 屬性值;
}
```

網頁布局第二準則：先設定盒子大小，之後設定盒子的位置。

```css
.left,
.right {
  width: 200px;
  height: 200px;
  background-color: pink;
}

.left {
  float: left;
}

.right {
  float: right;
}
```

```html
<div class="left">左青龙</div>
<div class="right">右白虎</div>
```
