---
source:
  - 'origin/130-盒子模型/06-內邊距padding.md / # 內邊距不影響盒子大小'
---

# padding 在未設定寬度時的尺寸表現

如果塊級盒子本身沒有指定 `width`，水平方向的 `padding` 通常不會讓盒子超出父容器寬度，內容區會自動縮小來容納 padding。

但 `padding` 仍然是盒子實際尺寸的一部分；未指定 `height` 時，垂直方向的 `padding` 仍會增加盒子的實際高度。

```css
div {
  width: 300px;
  height: 100px;
  background-color: purple;
}

div p {
  /* width: 100%; */
  /* height: 100%; */
  padding: 30px;
  background-color: skyblue;
}
```

```html
<div>
  <p></p>
</div>
```
