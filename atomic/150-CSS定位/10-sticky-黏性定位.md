---
source:
  - 'origin/150-CSS定位/07-黏性定位sticky.md / 全文'
---

# sticky 黏性定位

黏性定位可以被認為是相對定位和固定定位的混合。

黏性定位的特點：

- 以瀏覽器的可視窗口為參照點移動元素，這是固定定位的特點。
- 黏性定位佔有原先的位置，這是相對定位的特點。
- 必須添加 `top`、`left`、`right`、`bottom` 其中一個才有效。
- 跟頁面滾動搭配使用。
- 兼容性較差，IE 不支持。

```css
選擇器 {
  position: sticky;
  top: 10px;
}
```

```css
body {
  height: 3000px;
}

.nav {
  /* 黏性定位 */
  position: sticky;
  top: 0;
  width: 800px;
  height: 50px;
  background-color: pink;
  margin: 100px auto;
}
```

```html
<body>
  <div class="nav">我是导航栏</div>
</body>
```
