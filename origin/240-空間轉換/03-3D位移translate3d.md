<aside>
💡

**3D 移動在 2D 移動的基礎上多加了一個可以移動的方向，就是z軸方向。**

- `translform:translateX(100px)`：僅僅是在 X 軸上移動。
- `translform:translateY(100px)`：僅僅是在 Y 軸上移動。
- `translform:translateZ(100px)`：僅僅是在 Z 軸上移動 (注意：translateZ一般用 px單位 )。
- `transform:translate3d(x, y, z)`：其中 x、y、z 分別指要移動的軸的方向的距離。
</aside>

```css
transform: translate3d(x, y, z);

transform: translateX(x);
transform: translateY(y);
transform: translateZ(z);
```

<aside>
💡

**取值 :**

- 正負均可。
- 百分比。
- 像素值。
</aside>

```css
body {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.box {
  width: 200px;
  height: 200px;
  background-color: pink;
  transition: all 0.5s;
}

.box:hover {
	/* transform: translateX(100px) translateY(100px) translateZ(100px); */
	
	/* 3D 移動簡寫如下: */
	transform: translate3d(100px, 100px, 200px);
}
```

```html
<body>
  <div class="box"></div>
</body>

```

<aside>
💡

**因為 z軸 是垂直屏幕，由里指向外面，所以默認是看不到元素在 z 軸的方向上移動。**

</aside>