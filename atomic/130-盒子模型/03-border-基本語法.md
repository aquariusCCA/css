---
source:
  - 'origin/130-盒子模型/04-邊框border.md / # 邊框簡介'
  - 'origin/130-盒子模型/04-邊框border.md / # border-style'
---

# border 基本語法

`border` 可以設定元素的邊框。邊框由三部分組成：

- 邊框寬度：`border-width`
- 邊框樣式：`border-style`
- 邊框顏色：`border-color`

![border-width border-style border-color 屬性作用表](../../origin/130-盒子模型/assets/images/box-border-img-001-9d9559.png)

```css
div {
  width: 200px;
  height: 200px;

  /* 粗細、線條樣式、顏色，不分先後順序 */
  /* 預設 4 個方向都有 */
  /* border: 10px solid red; */

  border-width: 10px;
  border-style: solid;
  border-color: red;

  /* 單個方向 */
  /* border-top: 10px solid red; */
  /* border-bottom: 10px solid red; */
  /* border-left: 10px solid red; */
  /* border-right: 10px solid red; */
}
```

```html
<div>文字</div>
```

`border-style` 可以設定邊框樣式，常見值包含：

- `none`：沒有邊框，會忽略所有邊框寬度，這是預設值。
- `solid`：單實線，最常用。
- `dashed`：虛線。
- `dotted`：點線。

```css
div {
  width: 300px;
  height: 200px;
  border-width: 5px;
  border-style: solid;
  border-color: pink;

  /* 邊框複合寫法 */
  /* border: 5px solid pink; */

  /* 只設定上邊框，其餘同理 */
  /* border-top: 5px solid pink; */

  /* 只設定下邊框，其餘同理 */
  /* border-bottom: 10px dashed purple; */
}
```

```html
<div>文字</div>
```
