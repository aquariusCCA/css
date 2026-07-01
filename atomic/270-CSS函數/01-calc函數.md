---
source:
  - 'origin/270-CSS函數/01-CSS函數.md / # calc() 函數'
---

# calc() 函數

> `calc()`：此 CSS 函數讓你在聲明 CSS 屬性值時執行一些計算。

```css
/* 可以使用 +、-、*、/ 進行計算；+ 和 - 前後要保留空白，結果也必須符合屬性可接受的值型別。 */
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
	/* 以父盒子的內容寬度 100% 為基準，再減去 30px。 */
	width: calc(100% - 30px);
  margin: 0 auto;
  height: 30px;
  background-color: skyblue;
}
```
