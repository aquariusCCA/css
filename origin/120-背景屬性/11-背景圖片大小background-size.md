> 作用: 設置背景圖片的大小。

```css
background-size: 背景圖片寬度 背景圖片高度;
```

<aside>
👉

**取值如下**

- auto 背景圖片的真實大小 (默認值)。
- 用長度值指定背景圖大小，不允許負值。
- 用百分比指定背景圖片大小，不允許負值。
- contain : 將背景圖片等比縮放，使背景圖片的寬或高，與容器的寬或高相等，再將完整背景圖片包含在容器內。
    - 但要注意可能會造成容器裡部分區域沒有背景圖片。( 可能留白 )
- cover : 將背景圖片等比縮放，直到完全覆蓋容器，圖片會盡可能全的顯示在元素上。
    - 但是要注意背景圖片有可能顯示不完整。( 圖片可能顯示不全 )
</aside>

```css
.box {
  width: 800px;
  height: 800px;
  background-color: pink;
  background-image: url(./images/logo.png);
  background-repeat: no-repeat;

  background-size: 500px 500px;
	/* background-size: 100% 100%; */
	
	/* 1. 只寫一個參數: 肯定是寬度，高度省略了，會等比例縮放 */
	/* background-size: 500px; */
	
	/* 2. 裡面的單位可以跟 % -> 相對於父盒子來說 */
	/* background-size: 50%; */
	
	/* 3. cover: 等比例拉伸，要完全覆蓋 div 盒子，可能有部分配景圖片顯示不全 */
	/* background-size: cover; */
	
	/* 4. contain 高度和寬度等比例拉伸，當寬度或者高度鋪滿 div 盒子，就不再進行拉伸了，可能有部分空白區域。 */
	background-size: contain;
}
```

```html
<div class="box"></div>
```

# **背景兩倍圖**

```css
/* 1. 我們有一個 50*50 的盒子需要一個背景圖片，但是根據分析這個圖片還是準備 2 倍的 100*100 */
/* 2. 我們需要把這個圖片縮放一半，也就是 50 * 50 (使用 background-size) */
div {
  width: 50px;
  height: 50px;
  border: 1px;
  background: url(./images/ldh.jpg) no-repeat;
  background-size: 50px 50px;
}
```

```html
<div></div>
```

# **實現響應式背景圖片**

<aside>
👉

**實現的基本原理：**

- 將使用到保持元素的寬高比的技巧，為元素加垂直方向 padding-top 值，使用百分比的形式，這個是相對於元素的寬高而定的。
- 比如，一張圖片的寬度為 474px，高度為 355.5px, 那麼現在的 padding-top 值如下 :
</aside>

```css
padding-top = (高度/宽度) * 100% =（474/355.5）* 100% = 75%
```

```css
.column {
  max-width: 640px;
}

.figure {
  padding-top: 65.46%;
  background: url(./images/ldh.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
```

```html
<img src="./images/ldh.jpg" alt="">
<h3>使用padding-top实现响应性图片(图片的宽度是640px，高度是419px)</h3>
<div class="column">
  <div class="figure"></div>
</div>
```