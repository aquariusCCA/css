---
source:
  - 'origin/230-平面轉換/03-旋轉rotate.md / # 旋轉rotate'
  - 'origin/230-平面轉換/06-總結.md / rotate 摘要'
---

# rotate 旋轉語法

> 2D 旋轉指的是讓元素在二維平面內順時針旋轉或者逆時針旋轉。

- 角度為正時，順時針；角度為負時，逆時針。
- `rotate` 裡面跟度數，單位是 `deg`，比如 `rotate(45deg)`。
- 默認旋轉的中心點是元素的中心點。

```css
transform: rotate(度数)
```

```css
.box {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    background-color: skyblue;
    transition: all 0.5s;
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
