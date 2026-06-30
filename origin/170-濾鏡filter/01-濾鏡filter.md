> filter: CSS屬性將模糊或顏色偏移等圖形效果應用於元素(圖片變模糊)。

```css
filter: 函数();

filter: blur(5px);
```

- 模糊處理：`blur`數值越大越模糊。
    
    ![截圖 2024-09-09 下午1.43.31.png](./assets/images/css-filter-img-001-50019e.png)
    

```css
img {
		/* blur 是一个函数，小括号里面的数值越大，图片越模糊，注意数值要加px单位 */
		filter: blur(5px);
}
```

```html
<body>
  <img src="./assets/images/css-filter-img-002-354aea.jpg" alt="">
</body>
```
