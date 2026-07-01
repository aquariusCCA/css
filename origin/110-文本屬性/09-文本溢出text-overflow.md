> 規定當文本溢出包含元素時發生的事情。

<aside>
👉

**屬性值如下 :**

1. clip: 裁剪文本。( 默認值 )
2. ellipsis: 使用省略號代表被修剪的文本。
</aside>

```css
.a {
  width: 100px;
  height: 20px;
  font: 8px/20px arial;
  border: 1px solid black;

  /* 超出元素框部分隐藏 */
  overflow: hidden;

  /* 超出的文本被裁剪 */
  text-overflow: clip;

  /* 强制文本在同一行表示 */
  white-space: nowrap;
}

.b {
  width: 100px;
  height: 20px;
  font: 8px/20px arial;
  border: 1px solid black;
  
  /* 超出元素框部分隐藏 */
  overflow: hidden;

  /* 超出的文本用省略号表示 */
  text-overflow: ellipsis;

  /* 强制文本在同一行表示 */
  white-space: nowrap;
}
```

```html
<div class="a">我是大聪明我是大聪明我是大聪明我是大聪明</div>
<br><br>
<div class="b">我是大聪明我是大聪明我是大聪明我是大聪明</div>

```

<aside>
⚠️

**注意 : 要使得 text-overflow 屬性生效，塊容器必須顯示定義 overflow 為非 visible 值，white-space 為 nowrap 值。**

</aside>

# **單行文本溢出省略號顯示**

![新聞列表中的單行文字溢出省略號效果](./assets/images/text-overflow-img-001-141123.png)

- 必須滿足三個條件，如下:
    
    ```css
    /* 1.先强制一行内显示文本 */
    white-space: nowrap;
    /*默认 normal 是自动换行，nowrap是强制一行显示文本*/
    
    /* 2.超出的部分隐藏 */
    overflow: hidden;
    
    /* 3.文字用省略号替代超出的部分*/
    text-overflow: ellipsis;
    ```
    

```css
div {
  width: 150px;
  height: 80px;
  background-color: pink;
  margin: 100px auto;
  
	/* 这个单词的意思是如果文字显示不开自动换行 */
	/* white-space: normal; */
	
	/* 1.这个单词的意思是如果文字显示不开也必须强制一行内显示 */
	white-space: nowrap;

	/* 2.溢出的部分隐藏起来 */
	overflow: hidden;

	/* 3. 文字溢出的时候用省略号来显示 */
	text-overflow: ellipsis;
}
```

```html
<div>
  啥也不说，此处省略一万字
</div>
```

# **多行文本溢出顯示省略號顯示**

> 多行文本溢出顯示省略號，有較大的兼容性問題，適合於 webKit 瀏覽器或移動端 ( 移動端大部分是webKit內核 )。
> 
> ![圖文卡片中的多行文字溢出省略號效果](./assets/images/text-overflow-img-002-52efc0.png)

- 必須滿足五個條件，如下:
    
    ```css
    overflow: hidden;
    
    text-overflow: ellipsis;
    
    /* 弹性伸缩盒子模型显示 */
    display: -webkit-box;
    
    /* 限制在一个块元素显示的文本的行数 */
    -webkit-line-clamp: 2;
    
    /* 设置或检索伸缩盒对象的子元素的排列方式 */
    -webkit-box-orient: vertical;
    ```
    

```css
div {
  width: 150px;
  height: 65px;
  background-color: pink;
  margin: 100px auto;
  overflow: hidden;
  text-overflow: ellipsis;

	/* 弹性伸缩盒子模型显示 */
	display: -webkit-box;

	/* 限制在一个块元素显示的文本的行数 */
  -webkit-line-clamp: 3;

	/* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-box-orient: vertical;
}
```

```html
<div>
    啥也不说，此处省略一万字,啥也不说，此处省略一万字此处省略一万字
</div>
```
