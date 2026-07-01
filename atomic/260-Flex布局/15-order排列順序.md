---
source:
  - 'origin/260-Flex布局/04-flex布局子項常見屬性.md / # order 屬性定義項目的排列順序'
---

# order 排列順序

`order` 屬性定義項目的排列順序：數值越小，排列越靠前，默認為 `0`，注意和 `z-index` 不一樣。

![order 屬性改變第二個項目的顯示順序](../../origin/260-Flex布局/assets/images/flex-item-properties-img-010-6aefcc.png)

```html
<body>
  <div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </div>
</body>
```

```css
div {
  display: flex;
  width: 80%;
  height: 300px;
  background-color: pink;
}

div span {
  width: 150px;
  height: 100px;
  margin-right: 5px;
}

div span:nth-child(1) {
  background-color: purple;
}

div span:nth-child(2) {
  /* 默认是0，-1比0小所以在前面 */
  background-color: yellow;
  order: -1;
}

div span:nth-child(3) {
  background-color: skyblue;
}
```
