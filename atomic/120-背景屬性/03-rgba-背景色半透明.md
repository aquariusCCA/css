---
source:
  - 'origin/120-背景屬性/02-背景顏色background-color.md / # 背景色半透明'
---

# RGBA 背景色半透明

CSS3 提供了背景顏色半透明的效果。

```css
background: rgba(0, 0, 0, 0.3);
```

最後一個參數是 alpha 透明度，取值範圍在 `0` 到 `1` 之間。

習慣上可以把 `0.3` 的 `0` 省略，寫為 `rgba(0, 0, 0, .3)`。

```css
div {
  width: 300px;
  height: 300px;
  background-color: rgba(0, 0, 0, .3);
  /* background: rgba(0, 0, 0, 0.3); */
  /* background: rgba(0, 0, 0, .3); */
}
```

```html
<div>隐形的翅膀</div>
```

注意：背景半透明是指盒子背景半透明，盒子裡面的內容不受影響。
