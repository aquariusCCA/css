> **參考文章：**
> 
> - [CSS背景属性,background-origin和background-clip](https://blog.csdn.net/w875471321/article/details/120802835)

> 作用 : 設置背景圖的向外裁減的區域。 

<aside>
👉

**語法 :**

- border-box (默認值) : 從 border 區域開始向外裁減背景。
- padding-box : 從 padding 區域開始向外裁減背景。
- content-box : 從 content 區域開始向外裁減背景。
- text : 背景圖只呈現在文字上。
- **⚠️ 注意 !! 若值為 text，那麼 `backgroud-clip` 要加上 `webkit-` 前綴。**
</aside>

```css
.box {
	padding: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: blueviolet;
  border: 20px dotted brown;
  margin-top: 100px;

  background-clip: border-box;
	/* background-clip: padding-box; */
	/* background-clip: content-box; */
}

.my-text {
  font-size: 36px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(45deg, #ff9900, #ff0066);
  -webkit-background-clip: text;
}
```

```html
<div class="box"></div>
<div class="my-text">Hello, Background Clip!</div>
```