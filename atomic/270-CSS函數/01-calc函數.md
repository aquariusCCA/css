---
source:
  - 'origin/270-CSS函數/01-CSS函數.md / # calc() 函數'
---

# calc() 函數

> `calc()`：此 CSS 函數讓你在聲明 CSS 屬性值時執行一些計算。

```css
/* 括號裡面可以使用 +、 -、 *、 / 來進行計算。 */
width: calc(100% - 80px);
```

## 範例

需求：子盒子寬度永遠比父盒子小 30 像素。

```html
<body>
	<!-- 需求：我们的子盒子宽度永远比父盒子小30像素 -->
	<div class="father">
    <div class="son"></div>
  </div>
</body>
```

```css
.father {
  width: 300px;
  height: 200px;
  background-color: pink;
}

.son {
	/* son 盒子和父亲一样宽，都是100%，son盒子-30px */
	width: calc(100% - 30px);
  margin: 0 auto;
  height: 30px;
  background-color: skyblue;
}
```
