# 相對定位relative

<aside>
💡 **Questions:**

*Write it during the class*

</aside>

<aside>
💡 **Key Points:**

*Write it after the class*

</aside>

<aside>
📌 **Summary:**

*Write it after the class*

</aside>

<aside>
✏️

**Notes:**

*Write it during the class*

> 相對定位是元素在移動位置的時候，是相對於它原來的位置來說的。
> 

<aside>
💡

**偏移量：**

- left: 正值向右，負值向左
- right: 正值向左，負值向右
- top: 正值向下，負值向上
- bottom: 正值向上，負值向下
- 當四個屬性同時存在時，left、top 是優先級最高。
</aside>

<aside>
💡

**特點:**

- 它是相對於自己原來的位置來移動的(移動位置的時候參照點是自己原來的位置)。
- 原來在標準流的位置繼續佔有，後面的盒子仍然以標準流的方式對待。 （不脫標，繼續保留原來位置）。
- 因此，相對定位並沒有脫標，它最典型的應用是給絕對定位當爹的。
- 定位元素的顯示層級比普通元素高，無論甚麼定位，顯示層級都是一樣的。
    - 定位的元素會覆蓋在普通元素之上。
    - 都發生定位的兩個元素，後寫的元素會蓋在先寫的元素之上。
</aside>

<aside>
⚠️

**注意點 :**

- left 不能和 right 一起設置，top 和 bottom 不能一起設置。
- 相對定位的元素，也能繼續浮動，但不推薦這樣做。
- 相對定位的元素，也能通過 margin 調整位置，但不推薦這樣做。
</aside>

```css
.box1 {
    position: relative;
    top: 100px;
    left: 100px;
    width: 200px;
    height: 200px;
    background-color: pink;
}

.box2 {
    width: 200px;
    height: 200px;
    background-color: deeppink;
}
```

```html
<body>
    <div class="box1">
    </div>

    <div class="box2">
    </div>
</body>
```

</aside>