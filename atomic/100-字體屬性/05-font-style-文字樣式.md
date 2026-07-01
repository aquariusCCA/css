---
source:
  - 'origin/100-字體屬性/01-字體屬性.md / # 4. 文字樣式font-style'
---

# font-style 文字樣式

CSS 使用 `font-style` 屬性設置文本的風格。

![font-style 屬性值對照表，說明 normal 與 italic 的字體樣式作用](../../origin/100-字體屬性/assets/images/font-properties-img-003-7bf350.png)

平時很少給文字加斜體，反而常常要給斜體標籤（`em`、`i`）改為不傾斜字體。

```css
p {
  font-style: normal;
}
```

```css
p {
  font-style: italic;
}

em {
  /* 讓傾斜的字體不傾斜 */
  font-style: normal;
}
```

```html
<p>同学,上课时候的你</p>
<em>下课时候的你</em>
```
