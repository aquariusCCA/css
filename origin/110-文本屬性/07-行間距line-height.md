> ✏️ 補充內容: [CSS] 關於 line-height 的行距觀念 (https://app.notion.com/p/CSS-line-height-20e659be15dd806190e0ec4d34a61a4c?pvs=21), 深入 CSS 之 line-height 應用 (https://app.notion.com/p/CSS-line-height-20e659be15dd8070b418e3a8bf96e8e9?pvs=21)


> line-height 屬性用於設置行間的距離，可以控制文字行與行之間的距離，行間距包括上間距、文本高度、下間距。
> 
> ![行間距.png](%E8%A1%8C%E9%96%93%E8%B7%9Dline-height/%25E8%25A1%258C%25E9%2596%2593%25E8%25B7%259D.png)

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

![單行文字垂直居中.png](%E8%A1%8C%E9%96%93%E8%B7%9Dline-height/%25E5%2596%25AE%25E8%25A1%258C%25E6%2596%2587%25E5%25AD%2597%25E5%259E%2582%25E7%259B%25B4%25E5%25B1%2585%25E4%25B8%25AD.png)

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