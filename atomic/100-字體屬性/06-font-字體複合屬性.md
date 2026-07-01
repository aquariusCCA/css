---
source:
  - 'origin/100-字體屬性/01-字體屬性.md / # 字體複合屬性'
---

# font 字體複合屬性

字體屬性可以把以上文字樣式綜合來寫，這樣可以更節約代碼。

常見順序：

```text
文字樣式 文字粗細 文字大小/行高 文字字體
```

注意點：

1. 使用 `font` 屬性時，必須保留 `font-size` 和 `font-family`，否則整個 `font` 宣告無效。
2. `font-style`、`font-variant`、`font-weight` 等可選值必須寫在 `font-size` 前面；省略時會回到初始值。
3. 如果要同時設定行高，`line-height` 必須緊接在 `font-size` 後面，並用 `/` 分隔，例如 `16px/1.5`。
4. `font-family` 必須放在最後，且字體清單仍建議以通用字體族結尾。

```css
div {
  /* 想要 div 文字變傾斜、加粗，字號設置為 16 像素，並且是微軟雅黑 */
  /* 複合屬性：簡寫的方式，節約代碼 */
  /* 順序：font-style font-weight font-size/line-height font-family */
  font: italic 700 16px/1.5 "Microsoft YaHei", "微软雅黑", sans-serif;
}
```

```html
<div>正在努力學習前端知識中 ... </div>
```
