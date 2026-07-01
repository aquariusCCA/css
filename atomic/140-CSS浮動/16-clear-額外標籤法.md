---
source:
  - 'origin/140-CSS浮動/09-清除浮動.md / ### 額外標籤法也稱為隔牆法，是W3C推薦的做法'
---

# clear 額外標籤法

額外標籤法也稱為隔牆法，做法是在浮動元素末尾添加一個空的標籤。

![clear 屬性值 left right both 的作用表](../../origin/140-CSS浮動/assets/images/clear-float-img-003-5f9d1e.png)

實際工作中，幾乎只用 `clear: both`。

```html
<div style="clear:both"></div>
```

新增的空標籤必須是塊級元素。

優點：通俗易懂，書寫方便。

缺點：添加許多無意義標籤，結構化較差。

實際工作可能會遇到，但不常用。

```css
.box {
  width: 800px;
  border: 1px solid blue;
  margin: 0 auto;
}

.damao {
  float: left;
  width: 300px;
  height: 200px;
  background-color: purple;
}

.ermao {
  float: left;
  width: 200px;
  height: 200px;
  background-color: pink;
}

.footer {
  height: 200px;
  background-color: black;
}

.clear {
  clear: both;
}
```

```html
<body>
  <div class="box">
    <div class="damao">大毛</div>
    <div class="ermao">二毛</div>
    <div class="ermao">二毛</div>
    <div class="ermao">二毛</div>
    <div class="ermao">二毛</div>
    <!-- 新增的盒子必須是塊級元素，不能是行內元素 -->
    <div class="clear"></div>
  </div>
  <div class="footer"></div>
</body>
```

> 待後續內容審查確認：「W3C 推薦」可能是舊式教材表述，正式 notes 可確認是否改成歷史或入門做法。
