---
source:
  - 'origin/140-CSS浮動/09-清除浮動.md / ### 父級添加after偽元素'
---

# after 偽元素清除浮動

`::after` 方式是額外標籤法的升級版。它把清除浮動用的空盒子改成由父元素的偽元素產生，不需要在 HTML 中添加額外標籤。

優點：沒有增加標籤，結構更簡單。

缺點：寫法比額外標籤法更抽象；如果需要兼容很舊的瀏覽器，可能會看到舊式 `:after` 或 `*zoom: 1` 寫法。

```css
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  /* IE6、7 專有 */
  *zoom: 1;
}

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
```

```html
<body>
  <div class="box clearfix">
    <div class="damao">大毛</div>
    <div class="ermao">二毛</div>
  </div>

  <div class="footer"></div>
</body>
```
