> text-decoration 屬性規定添加到文本的裝飾，可以給文本添加下滑線、刪除線、上滑線等。
> 
> ![裝飾文本.png](%E8%A3%9D%E9%A3%BE%E6%96%87%E6%9C%ACtext-decoration/%25E8%25A3%259D%25E9%25A3%25BE%25E6%2596%2587%25E6%259C%25AC.png)

```css
div {
	/* 下划线 */
	/* text-decoration: underline;   */
	
	/* 删除线 */
	/* text-decoration: line-through; */

	/* 上划线 */
	text-decoration: overline;
}

a {
	/* 取消 a 默认的下划线 */
	text-decoration: none;
  color: #333;
}
```

```html
<div>粉红色的回忆</div>
<a href="#">粉红色的回忆</a>
```

<aside>
👉

 **開發中會使用 text-decoration: none; 清除 a 標籤默認的下滑線。**

</aside>