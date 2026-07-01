---
source:
  - 'origin/120-背景屬性/02-背景顏色background-color.md / 開頭到基本範例'
---

# background-color 背景顏色

`background-color` 屬性定義了元素的背景顏色。

一般情況下默認顏色是 `transparent`，也就是透明，也可以手動指定背景顏色為透明色。

```css
background-color: transparent;
```

```css
div {
  width: 200px;
  height: 200px;
  /* background-color: transparent; */
  /* background-color: red; */
  background-color: pink;
}
```

```html
<div></div>
```

背景顏色不會影響盒子，並且還能看清盒子的大小和位置。一般在布局中會習慣先給盒子設置背景顏色。
