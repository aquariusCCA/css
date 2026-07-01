---
source:
  - 'origin/130-盒子模型/06-內邊距padding.md / # 內邊距會影響實際盒子大小'
---

# padding 影響盒子實際大小

當盒子已經有指定的 `width` 和 `height` 時，再指定 `padding`，會發生兩件事：

- 內容和邊框之間產生距離。
- `padding` 會影響盒子的實際大小。

也就是說，如果盒子已經有了寬度和高度，此時再指定內邊距，會把盒子撐大。

![padding 會增加盒子實際寬高的示意圖](../../origin/130-盒子模型/assets/images/box-padding-img-003-3dcae2.png)

不過，`padding` 影響盒子大小有時也有好處。例如製作導航時，每個導航項目的字數不一樣，可以不給每個盒子固定寬度，改用 `padding` 撐開間距。

![導航列透過 padding 撐開連結間距的示例](../../origin/130-盒子模型/assets/images/box-padding-img-004-835d5f.png)

```css
div {
  width: 160px;
  height: 160px;
  background-color: pink;
  padding: 20px;
}
```

```html
<div>
  padding會影響盒子實際大小padding會影響盒子實際大小padding會影響盒子實際大小padding會影響盒子實際大小
</div>
```

如果要保證盒子和效果圖大小保持一致，可以讓 `width` / `height` 減去多出來的內邊距大小。
