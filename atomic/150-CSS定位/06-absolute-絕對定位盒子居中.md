---
source:
  - 'origin/150-CSS定位/05-絕對定位absolute.md / # 絕對定位的盒子居中'
---

# absolute 絕對定位盒子居中

加了絕對定位的盒子不能透過 `margin: 0 auto` 水平居中，但可以透過計算方式實現水平和垂直居中。

核心步驟：

- `left: 50%;` 讓盒子的左側移動到父級元素水平中心位置。
- `margin-left: -100px;` 讓盒子向左移動自身寬度的一半。
- `top: 50%;` 讓盒子的上側移動到父級元素垂直中心位置。
- `margin-top: -100px;` 讓盒子向上移動自身高度的一半。

```css
.box {
  position: absolute;

  /* 1. left 走父容器寬度的一半 */
  left: 50%;

  /* 2. margin 負值往左走自己盒子寬度的一半 */
  margin-left: -100px;

  /* 3. top 走父容器高度的一半 */
  top: 50%;

  /* 4. margin 負值往上走自己盒子高度的一半 */
  margin-top: -100px;

  width: 200px;
  height: 200px;
  background-color: pink;
}
```

```html
<body>
  <div class="box"></div>
</body>
```
