# **內邊距介紹**

- padding 屬性用於設置內邊距，即盒子邊框與內容之間的距離。
    
    ![內邊距介紹1.png](./assets/images/box-padding-img-001-c208a5.png)
    
- padding 屬性(簡寫屬性)可以有一到四個值。
    
    ![內邊距介紹2.png](./assets/images/box-padding-img-002-1510d3.png)
    

```css
/* 可取 4 个值、3 个值、2 个值、1 个值 */
padding: 上 右 下 左;
padding: 上 左右 下;
padding: 上下 左右;
padding: 上下左右;

/* 单个方向 */
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
```

# **內邊距會影響實際盒子大小**

- 當我們給盒子指定 padding 值之後，發生了兩件事情
    - 內容和邊框有了距離，添加了內邊距。
    - padding 影響了盒子實際大小。

- 也就是說，如果盒子已經有了寬度和高度，此時再指定內邊框，會撐大盒子。
    
    ![內邊距會影響實際盒子大小.png](./assets/images/box-padding-img-003-3dcae2.png)
    
- 但是，有時候 padding 影響盒子是有好處的，比如我們要做導航，因為每個導航欄裡面的字數不一樣多，我們可以不用給每個盒子寬度了，直接給 padding 最合適。
    
    ![內邊距會影響實際盒子大小2.png](./assets/images/box-padding-img-004-835d5f.png)
    

```css
div {
	width: 160px;
	height: 160px;
	background-color: pink;
	padding: 20px;
}
```

```html
<div>
    padding会影响盒子实际大小padding会影响盒子实际大小padding会影响盒子实际大小padding会影响盒子实际大小
</div>
```

<aside>
💡

**解決方案: 如果保證盒子跟效果圖大小保持一致，則讓 width / height 減去多出來的內邊距大小即可。**

</aside>

# **內邊距不影響盒子大小**

> 如果盒子本身沒有指定 width / height 屬性，則此時 padding 不會撐開盒子大小。

```css
div {
	width: 300px;
	height: 100px;
	background-color: purple;
}

div p {
	/* width: 100%; */
	/* height: 100%; */
	padding: 30px;
	background-color: skyblue;
}
```

```html
<div>
  <p></p>
</div>
```
