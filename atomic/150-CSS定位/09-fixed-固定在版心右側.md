---
source:
  - 'origin/150-CSS定位/06-固定定位fixed.md / # 固定定位小技巧'
---

# fixed 固定在版心右側

固定定位可以用小技巧固定在版心右側位置。

小算法：

- 讓固定定位盒子 `left: 50%`，先走到瀏覽器可視區，也可以看作版心的一半位置。
- 再讓固定定位盒子透過 `margin-left` 多走版心寬度的一半距離。

```css
.w {
  width: 800px;
  height: 1400px;
  background-color: pink;
  margin: 0 auto;
}

.fixed {
  position: fixed;
  /* 1. 走瀏覽器寬度的一半 */
  left: 50%;

  /* 2. 利用 margin 走版心盒子寬度的一半距離 */
  margin-left: 400px;

  width: 50px;
  height: 150px;
  background-color: skyblue;
}
```

```html
<body>
  <div class="fixed"></div>
  <div class="w">版心盒子 800像素</div>
</body>
```
