---
source:
  - 'origin/140-CSS浮動/09-清除浮動.md / ### 父級添加overflow屬性'
---

# overflow 清除浮動

可以給父級添加 `overflow` 屬性，將屬性值設定為 `hidden`、`auto` 或 `scroll`，用來清除浮動。

優點：代碼簡潔。

缺點：無法顯示溢出的部分。

```css
.box {
  /* 清除浮動 */
  overflow: hidden;
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
  <div class="box">
    <div class="damao">大毛</div>
    <div class="ermao">二毛</div>
  </div>

  <div class="footer"></div>
</body>
```
