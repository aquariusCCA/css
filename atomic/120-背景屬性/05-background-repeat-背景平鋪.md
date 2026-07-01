---
source:
  - 'origin/120-背景屬性/04-背景平舖background-repeat.md / 全文'
---

# background-repeat 背景平鋪

如果需要在 HTML 頁面上對背景圖像進行平鋪，可以使用 `background-repeat` 屬性。

![background-repeat 參數值與背景平鋪方式表](../../origin/120-背景屬性/assets/images/04-background-repeat-img-001-dd0c8e.png)

```css
background-repeat: repeat | no-repeat | repeat-x | repeat-y
```

```css
div {
  width: 900px;
  height: 900px;
  background-color: pink;
  background-image: url(./images/logo.png);

  /* 1.背景图片不平铺 */
  background-repeat: no-repeat;

  /* 2.默认的情况下,背景图片是平铺的 */
  /* background-repeat: repeat; */

  /* 3. 沿着x轴平铺 */
  /* background-repeat: repeat-x; */

  /* 4. 沿着Y轴平铺 */
  /* background-repeat: repeat-y; */
}
```

```html
<div></div>
```

頁面元素既可以添加背景顏色，也可以添加背景圖片，只不過背景圖片會壓住背景顏色。
