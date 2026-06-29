> background-color 屬性定義了元素的背景顏色。
 
- 一般情況下默認顏色是 transparent（透明），我們也可以手動指定背景顏色為透明色。
    
    ```css
    background-color: transparent;
    ```
    

```css
div {
  width: 200px;
  height: 200px;
	/* background-color: transparent; */
	/* background-color: red; */
	background-color: pink;
}
```

```html
<div></div>
```

<aside>
💡

**背景顏色不會影響盒子，並且還能看清盒子的大小和位置，一般在布局中會習慣先給盒子設置背景顏色。**

</aside>

# **背景色半透明**

> CSS3 為我們提供了背景顏色半透明的效果。

```css
background : rgba(0, 0, 0, 0.3);
```

- 最後一個參數是 alpha 透明度 ，取值範圍在 0~1 之間。
- 我們習慣把 0.3 的 0省略掉，寫為`background(0, 0, 0, .3);`

```css
div {
    width: 300px;
    height: 300px;
    background-color: rgba(0, 0, 0, .3);
		/* background: rgba(0, 0, 0, 0.3); */
		/* background: rgba(0, 0, 0, .3); */
}
```

```html
<div>隐形的翅膀</div>
```

<aside>
⚠️

**注意：背景半透明是指盒子背景半透明，盒子裡面的內容不受影響。**

</aside>