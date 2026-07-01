> outline 是邊框的外圍線條的設置，可以設置線條的寬度，顏色以及樣式。
> 
> ![outline 位於 border 外側且不占盒子尺寸的示意圖](./assets/images/box-outline-img-001-d80535.png)

- 簡寫格式:
    
    ```css
    outline: outline-color  outline-style  outline-width
    ```
    

<aside>
👉

**屬性值:**

- outline-color: 設置輪廓的顏色。
- outline-style: 設置輪廓的樣式。
- outline-width: 設置輪廓的寬度。
</aside>

<aside>
👉

**輪廓（outline）與邊框（border）的區別：**

- border 可應用於幾乎所有有形的 html 元素，而 outline 是針對鏈接、表單控件和 ImageMap 等元素設計。
- outline 的效果將隨元素的 focus 而自動出現，相應的由 blur 而自動消失。這些都是瀏覽器的默認行為，無需 JavaScript 配合 CSS 來控制。
- outline 是不佔空間的，不會像 border 那樣影響元素的尺寸或者位置，既不會增加額外的 width 或者 height。
</aside>

```css
.outlined-element {
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  margin: 20px;
  outline: 2px solid #3498db;
}
```

```html
<div class="outlined-element">This is an outlined element</div>
```

### **給表單添加 outline: 0; 或者 outline: none; 樣式後，就可以去掉默認的藍色邊框**

```css
input{
	/* 取消表单轮廓 */
	outline: none;
}
```

```html
<body>
	<!-- 1. 取消表单轮廓 -->
	<input type="text">
</body>
```
