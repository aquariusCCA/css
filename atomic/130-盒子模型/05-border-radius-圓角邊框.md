---
source:
  - 'origin/130-盒子模型/04-邊框border.md / # 圓角邊框 border-radius'
---

# border-radius 圓角邊框

CSS3 新增了 `border-radius` 圓角邊框樣式，可以用來設定元素外邊框的圓角，讓盒子的四個角變得圓潤。

`border-radius` 是簡寫屬性，可以跟四個值，分別代表左上角、右上角、右下角、左下角。

參數值可以是數值，也可以是百分比。圓角效果的原理是圓與邊框的交集。

![圓與邊框交集形成 border-radius 圓角的原理圖](../../origin/130-盒子模型/assets/images/box-border-img-003-1355f0.png)

```css
border-top-left-radius:
border-top-right-radius:
border-bottom-right-radius:
border-bottom-left-radius:

/* 單值：4 個角一樣 */
border-radius: 數字px/百分比;

/* 多值：從左上角開始，順時針賦值，沒有賦值時看對角 */
border-radius: 左上 右上 右下 左下;
```

單值範例：

```css
div {
  width: 300px;
  height: 150px;
  background-color: pink;
  border-radius: 10px;
}
```

```html
<div></div>
```

如果是正方形，想要設定為圓形，可以把數值改為高度或寬度的一半，也可以直接寫 `50%`。如果是矩形，想要設定圓角矩形，可以把圓角設為高度的一半。

```css
.yuanxing {
  width: 200px;
  height: 200px;
  background-color: pink;
  /* 50% 是寬度和高度的一半，等價於 100px */
  border-radius: 50%;
}

.juxing {
  width: 300px;
  height: 100px;
  background-color: pink;
  /* 圓角矩形設定為高度的一半 */
  border-radius: 50px;
}

.radius {
  width: 200px;
  height: 200px;
  /* border-radius: 10px 20px 30px 40px; */
  /* border-radius: 10px 40px; */
  border-top-left-radius: 20px;
  background-color: pink;
}
```

```html
1. 圓形的做法:
<div class="yuanxing"></div>

2. 圓角矩形的做法:
<div class="juxing"></div>

3. 可以設定不同的圓角:
<div class="radius"></div>
```
