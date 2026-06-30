> filter: CSS屬性將模糊或顏色偏移等圖形效果應用於元素(圖片變模糊)。

```css
filter: 函数();

filter: blur(5px);
```

- 模糊處理：`blur`數值越大越模糊。
    
    ![截圖 2024-09-09 下午1.43.31.png](%25E6%2588%25AA%25E5%259C%2596_2024-09-09_%25E4%25B8%258B%25E5%258D%25881.43.31.png)
    

```css
img {
		/* blur 是一个函数，小括号里面的数值越大，图片越模糊，注意数值要加px单位 */
		filter: blur(5px);
}
```

```html
<body>
  <img src="./images/ldh.jpg" alt="">
</body>
```