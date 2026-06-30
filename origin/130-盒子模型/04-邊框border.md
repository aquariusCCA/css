# **邊框簡介**

> border 可以設置元素的邊框，邊框有三部分組成，邊框寬度、邊框樣式、邊框顏色。
> 
> ![邊框.png](./assets/images/box-border-img-001-9d9559.png)

```css
div {
  width: 200px;
  height: 200px;
	/* 粗细 线条样式 颜色（不分先后顺序）*/
	/* 默认4个方向都有*/
	/* border: 10px solid red; */
	
	/* 单个属性
  border-width: 边框粗细
  border-style: 边框样式
  border-color: 边框颜色
  */
  border-width: 10px;
  border-style: solid;
  border-color: red;

	/* 单个方向 */
	/* border-top: 10px solid red; */
	/* border-bottom: 10px solid red; */
	/* border-left: 10px solid red; */
	/* border-right: 10px solid red; */
}
```

```html
<div>文字</div>
```

# **border-style**

<aside>
👉

**邊框樣式`border-style`可以設置如下值 :**

- `none` : 沒有邊框，即忽略所有邊框的寬度（默認值）。
- `solid` : 邊框為單實線（最為常用的）。
- `dashed` : 邊框為虛線。
- `dotted` : 邊框為點線。
</aside>

```css
div {
    width: 300px;
    height: 200px;
    border-width: 5px;
    border-style: solid;
    border-color: pink;

		/* 邊框的複合寫法 簡寫:  */
		/* border: 5px solid pink; */
		
		/* 只設定上邊框，其餘同理 */
		/* border-top: 5px solid pink; */
		
		/* 只設定下邊框，其餘同理 */
		/* border-bottom: 10px dashed purple; */
}
```

```html
<div>文字</div>
```

# **邊框會影響盒子實際大小**

![邊框會影響盒子實際大小.png](./assets/images/box-border-img-002-4b487b.png)

- 邊框會額外增加盒子的實際大小，因此我們有兩種方案解決:
    - 測量盒子大小的時候，不量邊框。
    - 如果測量的時候包含了邊框，則需要 `width / height` 減去邊框寬度。

```css
/* 我们需要一个 400 * 40 的盒子, 但是这个盒子有 10 像素的红色边框 */
div {
	width: 380px;
  height: 380px;
	background-color: pink;
	border: 10px solid red;
}
```

```html
<div></div>
```

# **圓角邊框 border-radius**

> 在 CSS3 中，新增了 border-radius 圓角邊框樣式，用於設置元素的外邊框圓角；讓盒子四個角變得圓潤，增加頁面細節。

- 該屬性是一個簡寫屬性，可以跟四個值，分別代表左上角，右上角，右下角，左下角。
- 參數值可以是數值或百分比的形式。
- 原理: 圓與邊框的交集形成圓角效果。
    
    ![圓與邊框的交集形成圓角效果.png](./assets/images/box-border-img-003-1355f0.png)
    

```css
border-top-left-radius:
border-top-right-radius:
border-bottom-right-radius:
border-bottom-left-radius:

/* 單值 4個角一樣 */
border-radius: 数字px/百分比;

/* 多值 左上角開始，順時針賦值，沒有賦值看對角 */
border-radius: 左上 右上 右下 左下;
```

- **範例程式碼 1**
    
    ```css
    div {
    	width: 300px;
    	height: 150px;
    	background-color: pink;
    	border-radius: 10px;
    }
    ```
    
    ```html
    <div></div>
    ```
    
- **範例程式碼 2**
    - 如果是正方形，想要設置為一個圓，把數值修改為高度或者寬度的一半即可，或者直接寫為50%。
    - 如果是一個矩形，設置為高度的一半就可以。
    
    ```css
    .yuanxing {
      width: 200px;
      height: 200px;
      background-color: pink;
    	/* 50% 就是寬度和高度的一半  等價於 100px */
    	border-radius: 50%;
    }
    
    .juxing {
    	width: 300px;
    	height: 100px;
    	background-color: pink;
    	/* 圓角矩形設置為高度的一半 */
    	border-radius: 50px;
    }
    
    .radius {
    	width: 200px;
    	height: 200px;
    	/* border-radius: 10px 20px 30px 40px; */
    	/* border-radius: 10px 40px; */
    	border-top-left-radius: 20px;
    	background-color: pink;
    }
    
    ```
    
    ```html
        1. 圆形的做法:
        <div class="yuanxing"></div>
    
        2. 圆角矩形的做法:
        <div class="juxing"></div>
    
        3. 可以设置不同的圆角:
        <div class="radius"></div>
    ```
