# **旋轉rotate**

> 2D旋轉指的是讓元素在二維平面內順時針旋轉或者逆時針旋轉。
> 
- 角度為正時，順時針，負時，為逆時針。
- `rotate` 裡面跟度數，單位是 `deg` 。比如 rotate(45deg)。
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

# **改變轉換原點transform-origin**

> 2D轉換中心點: 我們可以設置元素轉換的中心點transform-origin。
> 

```css
transform-origin: x y;
```

<aside>
💡

**重點**

- 注意後面的參數 x 和 y 用空格隔開。
- x y 默認轉換的中心點是元素的中心點 (50% 50%)。
- 還可以給 x y 設置 像素或者方位名詞 (`top`、`bottom`、`left`、`right`、`center`)。
</aside>

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