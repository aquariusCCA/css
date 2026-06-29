> text-align 屬性用於設置元素內文本內容的水平對齊方式。
> 
> ![對齊文本.png](%E5%B0%8D%E9%BD%8A%E6%96%87%E6%9C%ACtext-align/%25E5%25B0%258D%25E9%25BD%258A%25E6%2596%2587%25E6%259C%25AC.png)

<aside>
⚠️

**注意點 :**

- 如果需要讓文本水平居中，`text-align` 屬性給文本所在標籤 (文本的父元素) 設置。
</aside>

```css
h1 {
	/* 本質是讓 h1 盒子裡面的文字水平居中對齊 */
	text-align: center;
}
```

```html
<h1>居中對齊的標題</h1>
```