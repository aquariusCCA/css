> 粘性定位可以被認為是相對定位和固定定位的混合。
> 

<aside>
💡

**特點 :**

- 以瀏覽器的可視窗口為參照點移動元素（固定定位特點）。
- 粘性定位佔有原先的位置（相對定位的特點）。
- 必須添加 `top`，`left`，`right`，`bottom` 其中一個才有效。
- 跟頁面滾動搭配使用。兼容性較差，IE 不支持。
</aside>

```css
选择器 {
  position: sticky;
	top: 10px;
}
```

```css
body {
  height: 3000px;
}

.nav {
	/* 粘性定位 */
	position: sticky;
  top: 0;
  width: 800px;
  height: 50px;
  background-color: pink;
  margin: 100px auto;
}
```

```html
<body>
    <div class="nav">我是导航栏</div>
</body>
```
