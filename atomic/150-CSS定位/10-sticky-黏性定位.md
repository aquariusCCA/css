---
source:
  - 'origin/150-CSS定位/07-黏性定位sticky.md / 全文'
---

# sticky 黏性定位

黏性定位可以被認為是相對定位和固定定位的混合。

黏性定位的特點：

- 元素先保留在普通流中，滾動到指定邊偏移閾值後，會相對最近的滾動祖先與包含塊呈現黏住的效果。
- 在頁面本身滾動、且沒有額外滾動容器時，常見效果會像相對瀏覽器可視區固定。
- 黏性定位佔有原先的位置，這是相對定位的特點。
- 必須在需要黏住的軸向設定 `top`、`left`、`right`、`bottom` 等邊偏移之一，否則該軸向會表現得像相對定位。
- 跟頁面滾動搭配使用。
- IE 不支持；現代主流瀏覽器多已支援，但正式專案仍應依目標瀏覽器版本確認。

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
