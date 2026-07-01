---
source:
  - 'origin/130-盒子模型/06-內邊距padding.md / # 內邊距不影響盒子大小'
---

# padding 不影響盒子大小的情況

如果盒子本身沒有指定 `width` / `height` 屬性，此時 `padding` 不會撐開盒子大小。

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
