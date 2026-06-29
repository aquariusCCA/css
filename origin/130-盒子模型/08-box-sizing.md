> CSS3 中可以通過 box-sizing 來指定盒模型。
 
- 有`2`個值，這樣我們計算盒子大小的方式就發生了改變。
    - `content-box`
    - `border-box`

<aside>
💡

`content-box`

```css
box-sizing: content-box (默认)
盒子最终宽度 = width(content) + padding + border
```

- 第一種情況是 CSS 的盒子模型，盒子大小為 `width + padding + border`。
- 此種情況盒子大小為 寬度 + 內邊距 + 邊框，這也是我們之前寫盒子所默認的。
</aside>

<aside>
💡

`border-box`

```css
box-sizing: border-box
盒子最终宽度 = width = padding + border + content
```

- 第二種情況是 CSS3 的盒子模型，盒子大小為 `width`。
- 此種情況盒子大小為 寬度，不包括內邊距和邊框，這樣 `padding` 和 `border` 就不會撐大盒子了
    - 前提是 `padding` 和 `border` 不會超過 `width` 寬度。
- 我們可以在以後的 css 通配符中添加 CSS3 盒子模型。
    
    ```css
    * {
    	margin: 0;
    	padding: 0;
    
    	/* 這樣的話 padding 和 border 就不會撐大盒子了 */
    	box-sizing: border-box;
    }
    ```
    
</aside>

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

div {
    width: 200px;
    height: 200px;
    background-color: pink;
    border: 20px solid red;
    padding: 15px;
    box-sizing: content-box;
}

/* css3 盒子模型  盒子最终的大小就是 width  200 的大小 */
p {
    width: 200px;
    height: 200px;
    background-color: pink;
    border: 20px solid red;
    padding: 15px;
    box-sizing: border-box;
}
```

```html
<div>
  小猪乔治
</div>
<p>
  小猪佩奇
</p>
```