# 定位疊放次序z-index

✏️ 補充內容: 层叠上下文 (https://app.notion.com/p/147659be15dd8175af0ff1e914251478?pvs=21)

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

> 在使用定位佈局時候，可能會出現盒子重疊的情況，此時，可以用 z-index 來控制盒子的前後次序(z軸)。
> 
- 只有定位的盒子才有 z-index 屬性。
- z 軸: 用來控制元素離我們的多近。

```css
选择器 {
    z-index: 1;
}
```

- 數值可以是正整數，負整數或者0，默認是`auto`，數值越大，盒子越靠上。
- 如果屬性值相同，則按照書寫順序，後來居上。
- 數字後面不能加單位。

```css
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
}
.xiongda {
  background-color: red;
  z-index: 1;
}
.xionger {
  background-color: green;
  left: 50px;
  top: 50px;
  z-index: 2;
}
.qiangge {
  background-color:blue;
  left: 100px;
  top: 100px;
}
```

```html
<body>
    <div class="box xiongda">熊大</div>
    <div class="box xionger">熊二</div>
    <div class="box qiangge">光头强</div>
</body>
```

</aside>