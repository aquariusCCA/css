---
source:
  - 'origin/230-平面轉換/03-旋轉rotate.md / # 改變轉換原點transform-origin'
  - 'origin/230-平面轉換/06-總結.md / transform-origin 摘要'
---

# transform-origin 轉換原點

> 2D 轉換中心點：我們可以設置元素轉換的中心點 `transform-origin`。

```css
transform-origin: x y;
```

## 重點

- 注意後面的參數 x 和 y 用空格隔開。
- x y 默認轉換的中心點是元素的中心點，也就是 `50% 50%`。
- 還可以給 x y 設置像素或者方位名詞，例如 `top`、`bottom`、`left`、`right`、`center`。

```css
.box {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    background-color: skyblue;
    transition: all 0.5s;

		/* 改变旋转中心点 */
		transform-origin: right bottom;
}

.box:hover {
	/* 顺时针旋转360度 */
	transform: rotate(360deg);
}
```

```html
<body>
  <div class="box"></div>
</body>
```
