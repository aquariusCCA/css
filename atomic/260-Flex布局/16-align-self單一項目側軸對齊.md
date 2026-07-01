---
source:
  - 'origin/260-Flex布局/04-flex布局子項常見屬性.md / # align-self 控制子項自己在側軸上的排列方式'
---

# align-self 單一項目側軸對齊

![align-self 讓單一 flex 項目沿側軸靠下排列](../../origin/260-Flex布局/assets/images/flex-item-properties-img-011-d2a276.png)

- `align-self` 屬性允許單個項目有與其他項目不一樣的對齊方式，可覆蓋 `align-items` 屬性。
- 默認值為 `auto`，表示繼承父元素的 `align-items` 屬性，如果沒有父元素，則等同於 `stretch`。

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

  /* 让三个子盒子沿着侧轴底侧对齐 */
  /* align-items: flex-end; */
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
  margin-right: 5px;
}

div span:nth-child(3) {
  /* 我们想只让3号盒子下来底侧 */
  align-self: flex-end;
}
```
