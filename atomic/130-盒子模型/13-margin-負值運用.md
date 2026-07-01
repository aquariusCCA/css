---
source:
  - 'origin/130-盒子模型/07-外邊距margin.md / # margin負值的運用'
---

# margin 負值運用

負 `margin` 可以用來讓相鄰盒子的邊框重疊。

![使用負 margin 讓相鄰盒子邊框重疊的示意圖](../../origin/130-盒子模型/assets/images/box-margin-img-003-e9cdd1.png)

兩個盒子都加上 `1px` 邊框，並且浮動貼緊時，視覺上會出現 `1 + 1 = 2px` 的邊框厚度。

可以給右邊盒子添加 `margin-left: -1px`，讓它往左移動 `1px`，壓住相鄰盒子的邊框。

正數會往右邊走，負數會往左邊走。

當有多個盒子時：

- 讓每個盒子的 `margin` 往左側移動 `1px`，正好壓住相鄰盒子的邊框。
- 滑鼠經過某個盒子時，提高當前盒子的層級即可。

如果沒有定位，滑鼠經過時可以加相對定位：

```css
ul li {
  float: left;
  list-style: none;
  width: 150px;
  height: 200px;
  border: 1px solid red;
  margin-left: -1px;
}

ul li:hover {
  /* 如果盒子沒有定位，則滑鼠經過時添加相對定位即可。 */
  position: relative;
  border: 1px solid blue;
}
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
```

如果已有定位，則可以加 `z-index`：

```css
ul li {
  position: relative;
  float: left;
  list-style: none;
  width: 150px;
  height: 200px;
  border: 1px solid red;
  margin-left: -1px;
}

ul li:hover {
  /* 如果 li 都有定位，則利用 z-index 提高層級 */
  z-index: 1;
  border: 1px solid blue;
}
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
```
