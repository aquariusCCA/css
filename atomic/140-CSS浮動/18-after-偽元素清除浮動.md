---
source:
  - 'origin/140-CSS浮動/09-清除浮動.md / ### 父級添加after偽元素'
---

# after 偽元素清除浮動

`:after` 方式是額外標籤法的升級版。它也是添加給父元素，代表網站有百度、淘寶、網易等。

優點：沒有增加標籤，結構更簡單。

缺點：需要照顧低版本瀏覽器。

```css
.clearfix:after {
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

> 待後續內容審查確認：原始筆記使用 `:after`，現代 CSS 通常寫作 `::after`。
