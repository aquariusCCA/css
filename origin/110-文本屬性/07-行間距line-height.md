> ✏️ 補充內容: [CSS] 關於 line-height 的行距觀念 (https://app.notion.com/p/CSS-line-height-20e659be15dd806190e0ec4d34a61a4c?pvs=21), 深入 CSS 之 line-height 應用 (https://app.notion.com/p/CSS-line-height-20e659be15dd8070b418e3a8bf96e8e9?pvs=21)


> line-height 屬性用於設置行間的距離，可以控制文字行與行之間的距離，行間距包括上間距、文本高度、下間距。
> 
> ![行高由文字高度與上下間距組成的示意圖](./assets/images/line-height-img-001-ec9b78.png)

```css
p {
   line-height: 26px;
}
```

# **單行文字垂直居中**

> CSS沒有給我們提供文字垂直居中的代碼，這裡我們可以用一個小技巧來實現單行文字垂直居中。
> 
> - 解决方案 → 讓文字的行高等於盒子的高度，就可以讓文字在當前盒子內垂直居中。

<aside>
👉

**簡單理解**

![盒子高度與行高相同時單行文字垂直居中的示意圖](./assets/images/line-height-img-002-d09232.png)

- 行高的上空隙和下空隙把文字擠到中間了。
- 如果是行高小於盒子高度，文字會偏上，如果行高大於盒子高度，則文字偏下。
</aside>

```css
div {
    width: 200px;
    height: 40px;
    background-color: pink;
    line-height: 40px;
}
```

```html
<div>我要居中</div>
```
