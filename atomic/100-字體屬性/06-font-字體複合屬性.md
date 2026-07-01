---
source:
  - 'origin/100-字體屬性/01-字體屬性.md / # 字體複合屬性'
---

# font 字體複合屬性

字體屬性可以把以上文字樣式綜合來寫，這樣可以更節約代碼。

順序：

```text
文字樣式 文字粗細 文字大小/行高 文字字體
```

注意點：

1. 使用 `font` 屬性時，必須按照語法格式中的順序書寫，不能更換順序，並且各個屬性間以空格隔開。
2. 不需要設置的屬性可以省略，但必須保留 `font-size` 和 `font-family` 屬性，否則 `font` 屬性將不起作用。
3. 只能省略前兩個，如果省略了，相當於設置了默認值。

```css
div {
  /* 想要 div 文字變傾斜、加粗，字號設置為 16 像素，並且是微軟雅黑 */
  /* 複合屬性：簡寫的方式，節約代碼 */
  /* 順序：font-style font-weight font-size/line-height font-family */
  font: italic 700 16px 'Microsoft yahe';
}
```

```html
<div>正在努力學習前端知識中 ... </div>
```
