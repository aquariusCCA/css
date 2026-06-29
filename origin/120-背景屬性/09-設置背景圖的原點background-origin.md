> **參考文章：**
> 
> - [CSS背景属性,background-origin和background-clip](https://blog.csdn.net/w875471321/article/details/120802835)

> background-origin 用來控制背景圖片的位置。

<aside>
👉

**屬性值如下 :**

- padding-box (默認) : 從 padding 區域開始顯示背景圖像。
- border-box : 從 border 區域開始顯示背景圖像。
- content-box : 從 content 區域開始顯示背景圖像。
</aside>

```css
.box {
  width: 600px;
  height: 500px;
  padding: 50px;
  border: 20px dotted blueviolet;
  background: url(./images/logo.png) no-repeat;
  background-origin: border-box;
	/* background-origin: content-box; */
}
```

```html
<div class="box"></div>
```